const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requieeCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model("surveys");
module.exports = app => {
  app.post("/api/surveys", requireLogin, requieeCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({
        email
      }))
    });
  });
};
