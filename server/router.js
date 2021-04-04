const express = require('express');
const router = express.Router();
const UsersController = require('./controllers/usersController');
const HouseAreasController = require('./controllers/houseAreasController');
const CalendarController = require('./controllers/calendarController');

router.get('/', (req, res, next) => {
    res.json({test: 'teteteet'});
})

router.get('/users', UsersController.getData);
router.put('/users/:id', UsersController.updateSingleData);

router.get('/house-areas', HouseAreasController.getData);

router.get('/calendar-events', CalendarController.getData);
router.post('/calendar-events', CalendarController.createTasksData);
router.put('/calendar-events/:id', CalendarController.updateSingleData);



module.exports = router;