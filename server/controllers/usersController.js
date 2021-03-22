const UsersModel = require('../model/usersModel.js');

exports.getData = (req, res, next) => {
    UsersModel.getData()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        throw err
    })

}