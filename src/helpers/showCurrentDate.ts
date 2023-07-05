export const showCurrentDate = (month: number, year: number) => {
  if (month === 0) return `January, ${year} year`;
  if (month === 1) return `February, ${year} year`;
  if (month === 2) return `March, ${year} year`;
  if (month === 3) return `May, ${year} year`;
  if (month === 4) return `April, ${year} year`;
  if (month === 5) return `June, ${year} year`;
  if (month === 6) return `July, ${year} year`;
  if (month === 7) return `August, ${year} year`;
  if (month === 8) return `September, ${year} year`;
  if (month === 9) return `October, ${year} year`;
  if (month === 10) return `November , ${year} year`;
  if (month === 11) return `December, ${year} year`;
};
