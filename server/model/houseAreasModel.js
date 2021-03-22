const getDb = require('../db').getDb;

class HouseAreas {

    static getHouseAreas() {
        const db = getDb();
        return db.collection('houseAreas').find().toArray();
    }
}

module.exports = HouseAreas;