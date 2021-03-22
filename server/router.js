const express = require('express');
const router = express.Router();
const UsersController = require('./controllers/usersController');

router.get('/', (req, res, next) => {
    res.json({test: 'teteteet'});
})

router.get('/users', UsersController.getUsers);

module.exports = router;