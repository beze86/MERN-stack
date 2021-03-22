const HouseAreasModel = require('../model/houseAreasModel');

exports.getHouseAreas = (req, res, next) => {
    HouseAreasModel.getHouseAreas()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        throw err
    })
}