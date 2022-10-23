import moment from "moment";
import Week from "./week";
import Day from "./day";

class Month {
  name: string;
  month: number;
  days: number;
  weeks: Week[];
  year: number;

  constructor(date: Date) {
    this.month = moment(date).month() + 1;
    this.name = moment(date).format("MMMM");
    this.days = moment(date).daysInMonth();
    this.year = moment(date).year();

    this.weeks = this._createWeeks();
  }

  _createWeeks(): Week[] {
    let weeks: Week[] = [];
    let week: Week | null = null;
    for (let i = 0; i < this.days; i++) {
      let date = new Date(`${this.year}-${this.month}-${i + 1}`);
      // todo: replace with API check for availability
      const hasAvailability = Math.random() >= 0.6;
      const nextDayWeek = moment(date).add(1, "d").week();
      if (week === null) {
        week = new Week(date);
      }
      if (week.weekInYear !== nextDayWeek) {
        // Add the current day to the week and initialize
        week.addDay(new Day(date, hasAvailability, []));
        weeks.push(week);
        week = null;
        continue;
      }
      week.addDay(new Day(date, hasAvailability, []));
    }
    return weeks;
  }
}

export default Month;
