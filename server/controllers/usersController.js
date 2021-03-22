const UsersModel = require('../model/usersModel.js');

exports.getUsers = (req, res, next) => {
    UsersModel.getUsers()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        throw err
    })

}