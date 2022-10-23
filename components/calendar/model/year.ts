import moment from "moment";
import Month from "./month.js";

class Year {
  year: number;
  months: Month[];

  constructor(date: Date) {
    this.year = moment(date).year();
    this.months = this._createMonths();
  }

  _createMonths(): Month[] {
    let months = [];
    for (let i = 0; i < 12; i++) {
      let date = new Date(`${this.year}-${i + 1}-1`);
      months.push(new Month(date));
    }
    return months;
  }

  getMonth(monthIndex: number): Month {
    return this.months[monthIndex];
  }

  getMonthByName(name: string): Month | undefined {
    return this.months.find((month) => month.name === name);
  }
}

export default Year;
