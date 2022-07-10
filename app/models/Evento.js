const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
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
    unique: false,
    maxLength: 8,
    minLength: 6
  },

  inicio: {
    type: 'Number',
    unique: false,
    required: true
  },

  fim: {
    type: 'Number',
    unique: false,
    required: true
  },

  descricao: {
    typw: 'string',
    required: true,
    maxLength: 255,
    minLength: 1
  }
});

module.exports = mongoose.model('Evento', eventSchema);