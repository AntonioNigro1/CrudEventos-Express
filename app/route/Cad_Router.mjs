import Cad from '../models/Cad.mjs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const router = express.Router();
const __dirname = path.dirname(__filename);

router.get('/cadastro', function (req, res) {
  res.sendFile(path.resolve('app/public/cadastro.html'));
});

router.post('/cadastro', (req, res) => {
  try {
    Cad.add(req.body);
  } catch (error) {
    throw error;
  }

});

export default router;