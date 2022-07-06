import Event from '../models/Evento.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const router = express.Router();
const __dirname = path.dirname(__filename);

router.get('/eventos', function (req, res) {
  res.sendFile(path.resolve('app/public/eventos.html'));
});

export default router;