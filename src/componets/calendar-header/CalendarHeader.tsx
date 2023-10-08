import React from "react";

import * as S from "./styles";
import { getImageUrl } from "../../helpers/getImageUrl";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  handleNextMonth,
  handlePrevMonth,
  handleReset,
} from "../../redux/slices/calendarSlice";
import { CreateEventButton } from "../create-event-button/CreateEventButton";

interface CalendarHeaderProps {}

export const CalendarHeader: React.FC<CalendarHeaderProps> = () => {
  const monthIndex = useAppSelector((state) => state.calendar.monthIndex);
  const dispatch = useAppDispatch();
  return (
    <S.Root>
      <div className="logo">
        <img src={getImageUrl("google-calendar.svg")} alt={"logo"} width={50} />
        <h1>Calendar</h1>
      </div>

      <div className="btns">
        <button className="today" onClick={() => dispatch(handleReset())}>
          Today
        </button>
        <button onClick={() => dispatch(handlePrevMonth())}>
          <AiOutlineLeft />
        </button>
        <button onClick={() => dispatch(handleNextMonth())}>
          <AiOutlineRight />
        </button>
      </div>

      <h2>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>

      <CreateEventButton />
    </S.Root>
  );
};
