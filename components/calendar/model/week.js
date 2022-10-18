import moment from "moment";

class Week{
    constructor(date){
        this.date = date;
        this.weekInYear = moment(date).week();
        this.parentMonth = moment(date).month();
        this.childrenDays = [];
    }
    addDay(day){
        this.childrenDays.push(day);
    }
}

export default Week;