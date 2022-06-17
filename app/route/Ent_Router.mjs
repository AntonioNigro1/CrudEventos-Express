import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const router = express.Router();
const __dirname = path.dirname(__filename);

router.get('/entrar', function (req, res) {
  res.sendFile(path.resolve('app/public/index.html'));
});

export default router;