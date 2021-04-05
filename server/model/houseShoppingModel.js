const getDb = require('../db').getDb;

class HouseShopping {

    static getData() {
        const db = getDb();
        return db.collection('houseShopping').find().toArray();
    }
}

module.exports = HouseShopping;