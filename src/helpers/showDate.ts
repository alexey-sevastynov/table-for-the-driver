export const showDate = (day: number, month: number, year: number) => {
  const showTwoLastNum = year.toString().slice(2);

  const showMonth =
    month.toString().length === 1 ? "0" + month.toString() : month;
  return `${day}.${showMonth}.${showTwoLastNum}`;
};
