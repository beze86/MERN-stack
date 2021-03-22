const getDb = require('../db').getDb;

class HouseAreas {

    static getData() {
        const db = getDb();
        return db.collection('houseAreas').find().toArray();
    }
}

module.exports = HouseAreas;