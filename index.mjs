import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

import Cad_Router from './app/route/Cad_Router.mjs'
import Ent_Router from './app/route/Ent_Router.mjs'

const __filename = fileURLToPath(import.meta.url);
const router = express.Router();
const __dirname = path.dirname(__filename);

const port = 3000;

// Main App
var app = express();

app.set('view engine', 'hbs');
app.set('view', './app/view');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./app/public'));
app.use(cors());

//rotas
app.use('/', Ent_Router);
app.use('/', Cad_Router);

//criação do servidor
http.createServer(app).listen(port);