const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: {
    type: 'string',
    required: true,
    unique: false,
    maxLength: 255,
    minLength: 1
  },

  email: {
    type: 'string',
    required: true,
    maxLength: 255,
    minLength: 1
  },

  senha: {
    type: 'string',
    required: true,
    maxLength: 255,
    minLength: 1
  }
});

module.exports = mongoose.model('User', userSchema);