const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  // select is used for including or excluding the fields.
  // If the value is false, then fields are excluding.
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });

    return res.send(surveys);
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    return res.send("Thanks for voting!");
  });

  // webhook:- webhook is used for when one server communicate with another server.
  // This is the route where sendgrid make the post request to our express server,
  // and send information related to event which is done by user in mail.
  // Like, click event, user click the link (which is in gmail) or not.
  // which user click the link --> these information is posted on our server by sendgrid.
  app.post("/api/surveys/webhooks", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");

    // compact is used for removing undefined objects.
    // eleMatch is used for matching the fields in sub-document collection.
    // inc for increment the choice value by one, set for setting the value.
    // But, for setting the value inside the sub-document collection, we have to use $ symbol.
    // [choice] is not array, but is showned that if the value of choice is 'yes', then yes is incremented by 1,
    // And the value of choice is 'no' then no is incremented by 1.
    _.chain(req.body)
      .map(({ email, url }) => {
        const pathname = new URL(url).pathname;
        const match = p.test(pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: {
                email: email,
                responded: false,
              },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        ).exec();
      })
      .value();

    return res.send({});
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // Mailer is used for Email generation helper with template for our email body.
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();

      return res.send(user);
    } catch (err) {
      return res.status(422).send(err);
    }
  });

  app.post("/api/survey/delete", requireLogin, async (req, res) => {
    const { _id } = req.body;
    await Survey.findByIdAndRemove({ _id: _id }, { useFindAndModify: false });
    const user = await req.user.save();

    return res.send(user);
  });
};

// recipients: recipients.split(',').map((email) => { return { email: email}})
