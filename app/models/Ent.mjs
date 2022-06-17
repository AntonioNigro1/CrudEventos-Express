import { MongoClient as Client } from 'mongodb';
import conn from '../config/db.js';

export default class Ent {
  static login(dados) {
    return conn.then((conn) => {
      return conn.db.collection('user').insertOne();
    });
  }
}