const Calendar = require("../model/CalendarModel");


exports.getData = (req, res, next) => {
  Calendar.getData()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
};

exports.createTasksData = (req, res, next) => {
  const calendar = new CalendarModel();
  calendar
    .createTasksData()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      throw err;
    });
};

exports.updateSingleData = (req, res, next) => {
  const user = new Calendar();
  user.updateSingleData(req.body.eventData)
  .then((data) => {
      res.json(data)
  })
  .catch((err) =>{
      throw err
  })
}
