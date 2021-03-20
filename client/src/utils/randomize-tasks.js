import UsersApi from '../api/users';
import HouseApi from '../api/house-areas';

class CleanHouseTasks {
    constructor() {
      this.housemates = [
        { id: 1, name: "Bez", color: "#ff4954" },
        { id: 2, name: "Adan", color: "#3ecf8e" },
        { id: 3, name: "Caro", color: "#FF69B4" },
        { id: 4, name: "Giancarlo", color: "#1D79D4" },
        { id: 5, name: "Reinaldo", color: "#ffba86" },
      ];
      this.areas = ["small toilet", "main toilet", "kitchen", "bins", "common areas"];
    }
  
    randomLocation() {
      let randomNr = Math.floor(Math.random() * this.areas.length);
      let loc = this.areas[randomNr];
      this.areas.splice(randomNr, 1);
      return loc;
    }
  
    cleaningTask() {
      return this.housemates.map(({id, name, color}) => {
        return {
            id: id,
            name: name,
            area: this.randomLocation(),
            color: color,
        }
      })
    }
  }
  
export default CleanHouseTasks;
  