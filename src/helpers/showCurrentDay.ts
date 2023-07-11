import { getWeekDay } from "./getWeekDay";

export const showCurrentDay = (day: number, month: number, year: number) => {
  const newMonth = month - 1;
  const date = new Date(year, newMonth, day);

  if (newMonth === 0) return `${day} January, ${getWeekDay(date)} ${year} year`;
  if (newMonth === 1)
    return `${day} February, ${getWeekDay(date)} ${year} year`;
  if (newMonth === 2) return `${day} March, ${getWeekDay(date)} ${year} year`;
  if (newMonth === 3) return `${day} April, ${getWeekDay(date)} ${year} year`;
  if (newMonth === 4) return `${day} May, ${getWeekDay(date)} ${year} year`;
  if (newMonth === 5) return `${day} June, ${getWeekDay(date)} ${year} year`;
  if (newMonth === 6) return `${day} July, ${getWeekDay(date)} ${year} year`;
  if (newMonth === 7) return `${day} August, ${getWeekDay(date)} ${year} year`;
  if (newMonth === 8)
    return `${day} September, ${getWeekDay(date)} ${year} year`;
  if (newMonth === 9) return `${day} October, ${getWeekDay(date)} ${year} year`;
  if (newMonth === 10)
    return `${day} November, ${getWeekDay(date)} ${year} year`;
  if (newMonth === 11)
    return `${day} December, ${getWeekDay(date)} ${year} year`;

  //1 Jule, Saturday 2023 year
};
