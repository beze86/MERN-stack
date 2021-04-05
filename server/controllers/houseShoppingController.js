const HouseShoppingModel = require('../model/houseShoppingModel');

exports.getData = (req, res, next) => {
    HouseShoppingModel.getData()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        throw err
    })
}