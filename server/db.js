const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.CONNECTIONSTRINGLOCAL || process.env.CONNECTIONSTRINGREMOTE
const obj = {useUnifiedTopology: true, useNewUrlParser: true}

let _db;

const mongoConnect = (callback) => {

    MongoClient.connect(url, obj)
    .then((client) => {
        _db = client.db();
        callback();
    })
    .catch((err) => {
        console.log(err);
        throw err;
    })
}

const getDb = () =>{
    if(_db){
        return _db;
    }
    throw 'No database found';
}

module.exports.mongoConnect = mongoConnect;
module.exports.getDb = getDb;