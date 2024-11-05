const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

langSchema = new Schema({ body: String });

module.exports = mongoose.model("Lang",langSchema);
