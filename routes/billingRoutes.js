const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");
const sgMail = require("@sendgrid/mail");
const paymentTemplate = require("../services/emailTemplates/paymentTemplate");
sgMail.setApiKey(keys.sendGridKey);

// When we make the post request then express doesn't parse the data which is in req.body,
// So, there is a need to use body-parser module.
module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    try {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: "usd",
        description: "$5 for getting 5 credits !!!",
        source: req.body.id,
      });

      req.user.credits += 5;
      req.user.payment_details.Email = charge.billing_details.name;
      req.user.payment_details.receipt_url = charge.receipt_url;

      const msg = {
        to: req.user.payment_details.Email,
        from: "srvavliya79@gmail.com",
        subject: "Emaily-Payment-Receipt",
        html: paymentTemplate(charge),
      };

      sgMail.send(msg).catch((err) => {
        return res.send(err);
      });

      const user = await req.user.save();
      return res.send(user);
    } catch (err) {
      return res.status(422).send(err);
    }
  });
};
