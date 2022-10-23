class Day {
  day: number;
  hasAvailability: boolean;

  // Takes a date object and populate the day class
  constructor(date: Date, hasAvailability: boolean) {
    // TODO: Why it was .day? day does not exists there.
    //this.day = date.getDate().day;
    this.day = date.getDate();
    this.hasAvailability = hasAvailability;
  }
}

export const days = (): Day[] => {
  const days = [];
  for (let i = 0; i < 31; i++) {
    // Set has availability to random value
    const hasAvailability = Math.random() >= 0.5;
    days.push(new Day(new Date(), hasAvailability));
  }
  return days;
};
