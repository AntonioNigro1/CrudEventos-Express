import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url'

import UserRouter from './app/route/UserRouter.js';
import EventRouter from './app/route/EventRouter.js';

// Main App
var app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

//Conectar ao Banco de Dados
mongoose.connect(process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connection established on MongoDB Cloud');
  }
);

app.use(express.json());
app.use(express.static('./app/public'));
app.use(morgan('tiny'));
app.use(cors());

//rotas
app.use('/Users', UserRouter);
app.use('/Events', EventRouter);

//criação do servidor
const PORT = process.env.PORT || 3000;
http.createServer(app).listen(PORT);