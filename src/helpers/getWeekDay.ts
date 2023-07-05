import { dayNames } from "../constants";

export const getWeekDay = (date: any) => {
  return dayNames[date.getDay()];
};
