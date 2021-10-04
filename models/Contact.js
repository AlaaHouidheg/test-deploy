const mongoose = require("mongoose");

const { Schema } = mongoose;

const contact = new Schema({
  title: { type: String, required: true }, // String is shorthand for {type: String}
  description: { type: String },
});

const Contact = mongoose.model("contact", contact);
module.exports = Contact;
