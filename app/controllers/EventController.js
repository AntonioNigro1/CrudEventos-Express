const { findOneAndRemove } = require('../models/Evento');
const Evento = require('../models/Evento');

module.exports = {
  add: async (req, res) => {
    const { nome, data, tempo } = req.body;
    try {
      // Create new Evento
      const reply = await Evento.create({
        nome,
        data,
        tempo
      });
      res.status(200).json({ status: '200' });
    } catch (err) {
      console.log(err);
      res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
    }
  },
  delete: async (req, res) => {
    const { nome, data } = req.body;
    try {
      // Search User
      const reply = await findOneAndRemove({ nome: nome, data: data });
      console.log(reply);
      if (reply.deletedCount == 1) {
        res.status(200).json({ status: '200' });
      } else {
        res.status(404).json({ status: '404', error: '404 Event Not Found' });
      }
    } catch (err) {
      console.log(err);
      res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
    }
  },
  showAll: async (req, res) => {
    try {
      const reply = await Evento.find({});
      console.log(reply);
      if (reply != null) {
        console.log(reply);
        res.status(200).json({ status: '200', data: reply });
      } else {
        res.status(404).json({ status: '404', error: 'No Events Found' });
      }
    } catch (error) {
      res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
    }
  },
  findIt: async (req, res) => {
    const nome = req.params.nome;
    try {
      const reply = await Evento.findOne({ nome: nome, data: data });
      if (reply != null) {
        res.status(200).json({ status: '200', data: reply });
      } else {
        res.status(404).json({ status: '404', error: 'Event Not Found' });
      }

    } catch (error) {
      res.status(401).json({ status: '401', error: '401 Not Authenticaded' });
    }
  }
}