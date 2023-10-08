import React from "react";

import * as S from "./styles";
import { CalendarDay } from "../calendar-day/CalendarDay";

interface CalendarMonthProps {
  month: any[];
  dataEvent: any[];
}

export const CalendarMonth: React.FC<CalendarMonthProps> = ({
  month,
  dataEvent,
}) => {
  console.log(month);
  console.log(dataEvent);

  return (
    <S.Root>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day: any, inx: any) => {
            const event = dataEvent.filter(
              (item) =>
                new Date(item.start.dateTime).getFullYear() ===
                  day.$d.getFullYear() &&
                new Date(item.start.dateTime).getMonth() ===
                  day.$d.getMonth() &&
                new Date(item.start.dateTime).getDate() === day.$d.getDate()
            );

            return (
              <CalendarDay key={inx} day={day} rowIdx={i}>
                {event !== undefined
                  ? event
                      .sort((a, b) => {
                        const dateTimeA = new Date(a.start.dateTime);
                        const dateTimeB = new Date(b.start.dateTime);
                        return dateTimeA.getTime() - dateTimeB.getTime();
                      })
                      .map((item, index) => (
                        <p
                          key={index}
                          style={{
                            padding: "10px",
                            backgroundColor: "yellow",
                            fontSize: "18px",
                          }}
                        >
                          <b>{index + 1}.</b> {item.summary}
                        </p>
                      ))
                  : ""}
              </CalendarDay>
            );
          })}
        </React.Fragment>
      ))}
    </S.Root>
  );
};
