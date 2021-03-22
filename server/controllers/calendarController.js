const CalendarModel = require("../model/CalendarModel");


exports.getData = (req, res, next) => {
  CalendarModel.getData()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
};


exports.createTasksData = (req, res, next) => {
    const calendar = new CalendarModel();
    calendar.createTasksData()
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        throw err
    })
}

