class Day{
    // Takes a date object and populate the day class
    constructor(date, hasAvailability, events){
          this.day = date.getDate().day;
          this.hasAvailability = hasAvailability;
    }
}

export const days = () => {
    const days = [];
    for (let i = 0; i < 31; i++) {
        // Set has availability to random value
        const hasAvailability = Math.random() >= 0.5;
        days.push(new Day(new Date(), hasAvailability));
    }
    return days;
}