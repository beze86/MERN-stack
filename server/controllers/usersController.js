const Users = require('../model/usersModel.js');

exports.getData = (req, res, next) => {
    Users.getData()
    .then((data) => {
        res.json(data);
    })
    .catch((err) => {
        throw err
    })

}

exports.updateSingleData = (req, res, next) => {
    const user = new Users();
    user.updateSingleData(req.params.id, req.body.userData)
    .then((data) => {
        res.json(data)
    })
    .catch((err) =>{
        throw err
    })
}