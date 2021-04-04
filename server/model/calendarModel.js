const getDb = require("../db").getDb;
const mongodb = require('mongodb'); 
const UsersModel = require("./usersModel");
const HouseAreasModel = require("./houseAreasModel");
const utils = require("../utils/index");
const moment = require("moment");

class Calendar {

  async createTasksData() {
    const db = getDb();

    const sunday = moment()
      .day(0 + 7)
      .format("x");

    const endOfTheTask = moment()
      .day(0 + 13)
      .format("x");

    const areas = await HouseAreasModel.getData();
    const users = await UsersModel.getData();

    utils.shuffle(areas);

    const sundayTasks = users.map(({ name, color }, i) => {
      return {
        title: `${name}`,
        start: Number(sunday),
        end: Number(endOfTheTask),
        color: color,
        description: `${areas[i].area}`,
      };
    });
    return db.collection("calendarEvents").insertMany(sundayTasks);
  }

  static getData() {
    const db = getDb();
    return db.collection("calendarEvents").find().toArray();
  }

  updateSingleData(id, eventData) {
        const db = getDb();
        return db.collection('calendarEvents').updateOne({_id: new mongodb.ObjectID(id)}, {$set: {description: eventData.description}})
    }
}

module.exports = Calendar;
