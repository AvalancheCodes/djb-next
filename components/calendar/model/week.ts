import moment from "moment";
import Day from "./day";

class Week {
  date: Date;
  weekInYear: number;
  parentMonth: number;
  childrenDays: Day[];

  constructor(date: Date) {
    this.date = date;
    this.weekInYear = moment(date).week();
    this.parentMonth = moment(date).month();
    this.childrenDays = [];
  }

  addDay(day: Day): void {
    this.childrenDays.push(day);
  }
}

export default Week;
