import moment from "moment";
import Month from "./month.js";

class Year{
    constructor(date){
        this.year = moment(date).year();
        this.months = this._createMonths();
    }

    _createMonths(){
        let months = [];
        for(let i=0; i < 12; i++){
            let date = new Date(`${this.year}-${i+1}-1`);
            months.push(new Month(date));
        }
        return months;
    }

    getMonth(month){
        return this.months[month];
    }

    getMonthByName(name){
        return this.months.find(month => month.name === name);
    }

}

export default Year;