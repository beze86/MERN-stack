const getDb = require("../db").getDb;
const UsersModel = require("./usersModel");
const HouseAreasModel = require("./houseAreasModel");
const utils = require("../utils/index");

class Calendar {

  async createTasksData() {
    const db = getDb();
    let today = new Date();
    let sunday = today.setDate(
      today.getDate() + ((0 - 1 - today.getDay() + 7) % 7) + 1
    );

    const areas = await HouseAreasModel.getData();
    const users = await UsersModel.getData();

    utils.shuffle(areas);

    let sundayTasks = users.map(({ name, color }, i) => {
      return {
        title: `<p class="calendar__person-tasks pb-0 mb-0">${name} : ${areas[i].area}</p>`,
        start: sunday,
        end: sunday,
        color: color,
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
