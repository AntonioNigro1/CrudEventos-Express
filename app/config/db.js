import { MongoClient as Client } from 'mongodb';

export default Client.connect('mongodb://localhost:27017/app', { useNewUrlParser: true }).then((conn) => {
  return {
    db: conn.db('app'),
    close: function () {
      conn.close();
    }
  };
});