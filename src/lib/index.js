import holidays from "../holidays";

export function todayIsHoliday(today) {
  for (let index = 0; index < holidays.length; index++) {
    const holiday = holidays[index];
    if (holiday.date === today) {
      return index;
    }
  }
  return 0;
}
