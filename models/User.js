const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  username: String,
  credits: { type: Number, default: 0 },
  payment_details: {
    Email: String,
    receipt_url: String,
  },
});

mongoose.model("users", userSchema);
