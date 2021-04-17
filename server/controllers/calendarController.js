const Calendar = require("../model/calendarModel");


exports.getData = (req, res, next) => {
  Calendar.getData()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      throw err;
    });
};

exports.createTasksData = (req, res, next) => {
  const calendar = new Calendar();
  calendar
    .createTasksData()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      throw err;
    });
};

exports.updateSingleData = (req, res, next) => {
  const user = new Calendar();
  user.updateSingleData(req.params.id, req.body.eventData)
  .then((data) => {
      res.status(200).json(data)
  })
  .catch((err) =>{
      throw err
  })
}
