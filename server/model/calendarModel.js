const getDb = require("../db").getDb;
const UsersModel = require("./usersModel");
const HouseAreasModel = require("./houseAreasModel");
const utils = require("../utils/index");
const moment = require("moment");

class Calendar {
  async createTasksData() {
    const db = getDb();

    let sunday = moment()
      .day(0 + 7)
      .format("x");

    let endOfTheTask = moment()
      .day(0 + 13)
      .format("x");

    const areas = await HouseAreasModel.getData();
    const users = await UsersModel.getData();

    utils.shuffle(areas);

    let sundayTasks = users.map(({ name, color }, i) => {
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
}

module.exports = Calendar;
