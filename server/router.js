const express = require('express');
const router = express.Router();
const UsersController = require('./controllers/usersController');
const HouseAreasController = require('./controllers/houseAreasController');
const CalendarController = require('./controllers/calendarController');
const HouseShoppingListController = require('./controllers/houseShoppingController');

router.get('/', (req, res, next) => {
    res.status(200).json({test: 'teteteet'});
})

router.get('/users', UsersController.getData);
router.put('/users/:id', UsersController.updateSingleData);

router.get('/house-areas', HouseAreasController.getData);

router.get('/calendar-events', CalendarController.getData);
router.post('/calendar-events', CalendarController.createTasksData);
router.put('/calendar-events/:id', CalendarController.updateSingleData);

router.get('/shopping-list', HouseShoppingListController.getData);
router.post('/shopping-list/item', HouseShoppingListController.createItemData);
router.delete('/shopping-list/item/:id', HouseShoppingListController.deleteItemData);



module.exports = router;