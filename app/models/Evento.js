const mongoose = require('mongoose');

const Evento = new mongoose.Schema({
  nome: {
    type: 'string',
    required: true,
    unique: false,
    maxLength: 255,
    minLength: 1
  },

  data: {
    type: 'string',
    required: true,
    maxLength: 8,
    minLength: 6
  },

  tempo: {
    type: 'int',
    required: true
  },
});

module.exports = mongoose.model('Evento', eventSchema);