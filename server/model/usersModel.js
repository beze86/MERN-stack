const getDb = require('../db').getDb;
const mongodb = require('mongodb');

class Users {

    static getData() {
        const db = getDb();
        return db.collection('users').find().toArray();
    }

    updateSingleData(userData) {
        const db = getDb();
        return db.collection('users').updateOne({_id: new mongodb.ObjectID(userData.id)}, {$set: {name: userData.name, color: userData.color}})
    }
}

module.exports = Users;