const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { type: String },
  email: { type: String },
  message: { type: String, maxlength: 8000}
});

module.exports = mongoose.model('Contact', contactSchema);
