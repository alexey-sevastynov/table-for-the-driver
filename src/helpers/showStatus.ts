export const showStatus = (status: number) => {
  switch (status) {
    case 1:
      return "paid \u{2705}";
    case 2:
      return `unknown \u{1F315}`;
    case 3:
      return "debt \u{1F534}";
    case 4:
      return "other \u{1F4B0}";

    default:
      break;
  }

  return "";
};
