const getDb = require('../db').getDb;
const mongodb = require('mongodb');


class HouseShopping {

    static getData() {
        const db = getDb();
        return db.collection('houseShopping').find().toArray();
    }

    createItemData(data) {
        const db = getDb();
        return db.collection('houseShopping').insertOne(data);
    }

    deleteItemData(id) {
        const db = getDb();
        return db.collection('houseShopping').deleteOne({_id: new mongodb.ObjectID(id)});
    }

}

module.exports = HouseShopping;