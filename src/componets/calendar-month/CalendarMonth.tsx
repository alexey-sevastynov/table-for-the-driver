import React from "react";

import * as S from "./styles";
import { CalendarDay } from "../calendar-day/CalendarDay";
import { formatTime } from "../../helpers/formatTime";

interface CalendarMonthProps {
  month: any[];
  dataEvent: any[];
}

export const CalendarMonth: React.FC<CalendarMonthProps> = ({
  month,
  dataEvent,
}) => {
  return (
    <S.Root>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day: any, inx: any) => {
            const event = dataEvent.filter(
              (item) =>
                new Date(item.dateStart).getFullYear() ===
                  day.$d.getFullYear() &&
                new Date(item.dateStart).getMonth() === day.$d.getMonth() &&
                new Date(item.dateStart).getDate() === day.$d.getDate()
              // new Date(item.dateStart.dateTime).getFullYear() ===
              //   day.$d.getFullYear() &&
              // new Date(item.start.dateTime).getMonth() ===
              //   day.$d.getMonth() &&
              // new Date(item.start.dateTime).getDate() === day.$d.getDate()
            );

            return (
              <CalendarDay key={inx} day={day} rowIdx={i}>
                {event !== undefined
                  ? event
                      // .sort((a, b) => {
                      //   const dateTimeA = new Date(a.start.dateTime);
                      //   const dateTimeB = new Date(b.start.dateTime);
                      //   return dateTimeA.getTime() - dateTimeB.getTime();
                      // })
                      .map((item, index) => {
                        const timeStart = formatTime(new Date(item.dateStart));
                        const timeEnd = formatTime(new Date(item?.dateEnd));
                        const showTime = `at ${timeStart} ${
                          timeEnd ? `to ${timeEnd}` : ""
                        }`;
                        const message = `${showTime}, ${item.customer} (${
                          item.car
                        }), starting point on ${item.pointStart} ${
                          item.pointEnd ? `, last point ${item.pointEnd}` : ""
                        }`;
                        return (
                          <p
                            key={index}
                            style={{
                              padding: "10px",
                              backgroundColor: "yellow",
                              fontSize: "18px",
                            }}
                          >
                            <b>{index + 1}.</b> {message}
                          </p>
                        );
                      })
                  : ""}
              </CalendarDay>
            );
          })}
        </React.Fragment>
      ))}
    </S.Root>
  );
};
