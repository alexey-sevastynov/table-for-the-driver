import React from "react";

import * as S from "./styles";
import dayjs from "dayjs";

interface CalendarDayProps {
  day: any;
  rowIdx: number;
  children?: React.ReactNode;
}

export const CalendarDay: React.FC<CalendarDayProps> = ({
  day,
  // rowIdx,
  children,
}) => {
  const styleSelectWeekend =
    day.format("dddd").toUpperCase() === "SUNDAY" ||
    day.format("dddd").toUpperCase() === "SATURDAY"
      ? "weekend"
      : "";

  return (
    <S.Root
      active={
        day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? true : false
      }
    >
      <header>
        {/* {rowIdx === 0 && <p>{day.format("dddd").toUpperCase()}</p>} */}
        <p>{day.format("dddd").toUpperCase()}</p>

        <p className={styleSelectWeekend}>{day.format("DD")}</p>
      </header>
      <main>{children}</main>
    </S.Root>
  );
};
