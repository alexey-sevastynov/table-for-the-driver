import { IWork } from "../redux/slices/worksSlice";

export const dateSearch = (items: IWork[], valueSearch: string) => {
  return items.filter((item: IWork) => {
    return (
      (`0${item.day}` === valueSearch && item.id === 1) ||
      (`${item.day}` === valueSearch && item.id === 1) ||
      (`0${item.day}.` === valueSearch && item.id === 1) ||
      (`${item.day}.` === valueSearch && item.id === 1) ||
      (`${item.day}.0` === valueSearch && item.id === 1) ||
      (`0${item.day}.0` === valueSearch && item.id === 1) ||
      (`0${item.day}.0${item.month}` === valueSearch && item.id === 1) ||
      (`0${item.day}.${item.month}` === valueSearch && item.id === 1) ||
      (`${item.day}.${item.month}` === valueSearch && item.id === 1) ||
      (`${item.day}.0${item.month}` === valueSearch && item.id === 1) ||
      (`0${item.day}.${item.month}.` === valueSearch && item.id === 1) ||
      (`${item.day}.${item.month}.` === valueSearch && item.id === 1) ||
      (`${item.day}.0${item.month}.` === valueSearch && item.id === 1) ||
      (`0${item.day}.0${item.month}.${item.year.toString().slice(2)}` ===
        valueSearch &&
        item.id === 1) ||
      (`${item.day}.0${item.month}.${item.year.toString().slice(2)}` ===
        valueSearch &&
        item.id === 1) ||
      (`0${item.day}.${item.month}.${item.year.toString().slice(2)}` ===
        valueSearch &&
        item.id === 1) ||
      (`${item.day}.${item.month}.${item.year.toString().slice(2)}` ===
        valueSearch &&
        item.id === 1) ||
      (`0${item.day}.0${item.month}.${item.year
        .toString()
        .slice(2)
        .slice(0, 1)}` === valueSearch &&
        item.id === 1) ||
      (`${item.day}.0${item.month}.${item.year
        .toString()
        .slice(2)
        .slice(0, 1)}` === valueSearch &&
        item.id === 1) ||
      (`0${item.day}.${item.month}.${item.year
        .toString()
        .slice(2)
        .slice(0, 1)}` === valueSearch &&
        item.id === 1) ||
      (`${item.day}.${item.month}.${item.year
        .toString()
        .slice(2)
        .slice(0, 1)}` === valueSearch &&
        item.id === 1) ||
      (`0${item.day}.0${item.month}.${item.year}` === valueSearch &&
        item.id === 1) ||
      (`${item.day}.0${item.month}.${item.year}` === valueSearch &&
        item.id === 1) ||
      (`0${item.day}.${item.month}.${item.year}` === valueSearch &&
        item.id === 1) ||
      (`${item.day}.${item.month}.${item.year}` === valueSearch &&
        item.id === 1)
    );
  });
};
