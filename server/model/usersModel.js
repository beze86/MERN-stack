const getDb = require('../db').getDb;

class Users {

    static getData() {
        const db = getDb();
        return db.collection('users').find().toArray();
    }
}

module.exports = Users;