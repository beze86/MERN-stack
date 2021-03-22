const HouseAreasModel = require('../model/houseAreasModel');

exports.getData = (req, res, next) => {
    HouseAreasModel.getData()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        throw err
    })
}