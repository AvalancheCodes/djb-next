import moment from "moment";

class Day{
  // Takes a date object and populate the day class
  constructor(date, hasAvailability, events){
    this.date = date;
    this.day = moment(date).day();
    this.name = moment(date).format("dddd");
    this.hasAvailability = hasAvailability;
  }
}

export default Day;


