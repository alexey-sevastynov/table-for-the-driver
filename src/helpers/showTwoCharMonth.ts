export const showTwoCharMonth = (monthName: string) => {
  const getConsonants = monthName.replace(/[aeiou]/gim, "");

  if (monthName[0] === "A" || monthName[0] === "O") {
    const firstChar = monthName.slice(0, 1);

    return firstChar + getConsonants[0];
  } else {
    return getConsonants.slice(0, 2);
  }
};
