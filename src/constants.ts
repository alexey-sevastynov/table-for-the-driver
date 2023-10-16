export const buttonLinkList = [
  {
    icon: "home",
    title: "cu",
  },
  {
    icon: "logo",
    title: "ms",
  },
];

export const tableHadeNames = [
  "id",
  "customer",
  "route",
  "hours",
  "km",
  "income",
  "expenditure",
];

export const ROUTES = {
  HOME: "/table-for-the-driver/",
  MOUNTHS: "/months",
  ADD: "/add",
  DAY: "/day",
  EDIT: "/edit",
  SETUP: "/setup",
  STATISTICS: "/statistics",
  CALENDAR: "/calendar",
};

export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const URL_API = `https://api.telegram.org/bot${
  import.meta.env.VITE_TOKEN
}/sendMessage`;

export const CARS = ["Reno", "Mercedes", "Any"];
