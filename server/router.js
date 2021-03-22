const express = require('express');
const router = express.Router();
const UsersController = require('./controllers/usersController');
const HouseAreasController = require('./controllers/houseAreasController');

router.get('/', (req, res, next) => {
    res.json({test: 'teteteet'});
})

router.get('/users', UsersController.getUsers);
router.get('/house-areas', HouseAreasController.getHouseAreas);

module.exports = router;