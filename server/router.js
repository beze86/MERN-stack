const express = require('express');
const router = express.Router();
const UsersController = require('./controllers/usersController');
const HouseAreasController = require('./controllers/houseAreasController');
const CalendarController = require('./controllers/calendarController');

router.get('/', (req, res, next) => {
    res.json({test: 'teteteet'});
})

router.get('/users', UsersController.getData);
router.get('/house-areas', HouseAreasController.getData);
router.get('/calendar-events', CalendarController.getData);
router.post('/init', CalendarController.createTasksData);

module.exports = router;