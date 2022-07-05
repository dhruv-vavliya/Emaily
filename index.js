const express = require("express");
require("./models/User");
require("./models/Survey");
require("./services/googlePassport");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const connectDB = require("./services/database");
const keys = require("./config/keys");

const app = express();

app.use(bodyParser.json());
// app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

connectDB();

app.use(passport.initialize());
app.use(passport.session());

require("./routes/googleAuthRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  // Express will serve up production assets like our main.js file, or main, css file.
  app.use(express.static(path.join(__dirname, "client/build")));

  // Express will serve up the index.html file, if it doesn't recognize the route.
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// Middlewares are small functions which is used for performing some actions on incoming
// requests before routing the request to route handlers.
// app.use() is middleware functions which is used before route handlers.
// So, first of all initialize all middleware which you want to use, then initialize all the route handlers.
