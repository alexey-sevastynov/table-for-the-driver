export const showTextStatus = (status: number) => {
  if (status === 1) return "сплачено";
  if (status === 2) return "не сплачено";
  if (status === 3) return "долг";
  if (status === 4) return "інше";
  return "";
};
