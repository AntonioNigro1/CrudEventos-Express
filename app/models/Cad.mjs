import { MongoClient as Client } from 'mongodb';
import conn from '../config/db.js';


export default class Cad {
  static add(dados) {

    return conn.then((conn) => {
      return conn.db.collection('user').insertOne();
    });


  }
  static close() {
    conn.then((conn) => {
      conn.close();
    });
  }

};