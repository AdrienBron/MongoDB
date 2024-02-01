// mainModel.js
const mongoose = require('mongoose');

const salleSchema = new mongoose.Schema({
  name: String,
});

const Salle = mongoose.model('salles', salleSchema);

module.exports = Salle;
