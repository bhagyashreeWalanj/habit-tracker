import { HabitType } from "@/types/GlobalTypes";

export const getDateString = (currentDate: Date, daysOffset = 0) => {
  const adjustedDate = new Date(currentDate);
  adjustedDate.setDate(currentDate.getDate() + daysOffset);

  const year = adjustedDate.getFullYear();
  const month = String(adjustedDate.getMonth() + 1).padStart(2, "0");
  const day = String(adjustedDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// This function gets the name of the string date
export function getCurrentDayName(dateString: string) {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // set the current date
  const currentDate = new Date(dateString);
  const currentDayNumber = currentDate.getDay();
  return daysOfTheWeek[currentDayNumber];
}

// get the formatted date dd month yyyy
export const getFormattedDate = (dateString: string) => {
  const currentDate = new Date(dateString);
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // get the current day month and  year
  const day = currentDate.getDate();
  const month = monthArray[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  // format the date string
  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
};

// calculate streak habits
export function calculateStreak(habit: HabitType) {
  function getDayOfTheWeek(dateString: string) {
    const date = new Date(dateString);
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return days[date.getUTCDay()];
  }

  const completedDays = habit.completedDays.map((day) => day.date);
  const frequency = habit.frequency.days;
  const completedDaysOfWeek = completedDays.map(getDayOfTheWeek);

  let streak = 0;
  let maxStreak = 0;
  let lastIndex = -1;

  for (let i = 0; i < completedDaysOfWeek.length; i++) {
    const day = completedDaysOfWeek[i];
    const currentIndex = frequency.indexOf(day);

    if (currentIndex === -1) {
      streak = 0;
    } else {
      if (lastIndex === -1 || currentIndex === (lastIndex + 1) % 1) {
        streak++;
      } else {
        streak = 1;
      }
      lastIndex = currentIndex;
      maxStreak = Math.max(maxStreak, streak);
    }
  }

  return streak;
}
