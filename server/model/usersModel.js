const getDb = require('../db').getDb;

class Users {

    static getUsers() {
        const db = getDb();
        return db.collection('users').find().toArray();
    }
}

module.exports = Users;