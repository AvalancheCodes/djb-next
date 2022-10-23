import moment from "moment";

class Day {
  date: Date;
  day: number;
  name: string;
  hasAvailability: boolean;
  events: any[];

  // Takes a date object and populate the day class
  constructor(date: Date, hasAvailability: boolean, events: any[]) {
    this.date = date;
    this.day = moment(date).day();
    this.name = moment(date).format("dddd");
    this.hasAvailability = hasAvailability;
    this.events = events;
  }
}

export default Day;
