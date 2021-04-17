const HouseAreasModel = require('../model/houseAreasModel');

exports.getData = (req, res, next) => {
    HouseAreasModel.getData()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        throw err
    })
}