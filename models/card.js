const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
cardSchema = new Schema({ 
  title: String,
  body: String,
  link: String,
  linkT: String,
  list: String,
});

module.exports = mongoose.model("Card",cardSchema);
