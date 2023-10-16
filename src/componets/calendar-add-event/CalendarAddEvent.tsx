import React from "react";
import { MdClose } from "react-icons/md";

import * as S from "./styles";
import { closePopup } from "../../redux/slices/calendarSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { UseFormRegister } from "react-hook-form";

import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { CARS } from "../../constants";
import { Inputs } from "../../pages/calendar/MyCalendar";

interface CalendarAddEventProps {
  session: any;
  register: UseFormRegister<Inputs>;
  onChangeTimeStart: any;
  valueTimeStart: string | null;
  onChangeTimeFinish: any;
  valueTimeFinish: string | null;
  setCar: (car: "Reno" | "Mercedes" | "Any") => void;
  car: "Reno" | "Mercedes" | "Any";
  onChangeDate: (date: Date) => void;
  valueDate: any;
  createCalendarEvent: any;
}

export const CalendarAddEvent: React.FC<CalendarAddEventProps> = ({
  // session,
  register,
  onChangeTimeStart,
  valueTimeStart,
  onChangeTimeFinish,
  valueTimeFinish,
  setCar,
  car,
  onChangeDate,
  valueDate,
  createCalendarEvent,
}) => {
  const listCustomers = useAppSelector((state) => state.customer.items);
  const dispatch = useAppDispatch();

  return (
    <S.Root>
      <button className="close" onClick={() => dispatch(closePopup())}>
        <MdClose />
      </button>

      {/* <h2>Hey there {session.user.email}</h2> */}
      <main>
        <div>
          <div className="calendar__customer">
            <input
              type="text"
              placeholder="input customer..."
              {...register("customerInput")}
            />
            <select {...register("customerSelect")}>
              {listCustomers.map(({ _id, customer }) => (
                <option key={_id} value={customer}>
                  {customer}
                </option>
              ))}
            </select>
          </div>
          <div className="calendar__time">
            <p>start time:</p>
            <TimePicker onChange={onChangeTimeStart} value={valueTimeStart} />
          </div>
          <div className="calendar__time">
            <p>finish time:</p>
            <TimePicker onChange={onChangeTimeFinish} value={valueTimeFinish} />
          </div>
          <div className="calendar__car">
            <ul>
              {CARS.map((itemCar: any) => (
                <li
                  key={itemCar}
                  onClick={() => setCar(itemCar)}
                  className={`${itemCar === car ? "active" : ""}`}
                >
                  {itemCar}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="calendar__date">
          {/* @ts-ignore */}
          <Calendar onChange={onChangeDate} value={valueDate} locale="en" />
        </div>
      </main>

      <div className="calendar__customer">
        <input
          type="text"
          {...register("addressStart")}
          placeholder="the place start..."
        />
      </div>
      <div className="calendar__customer">
        <input
          type="text"
          {...register("addressEnd")}
          placeholder="the place finish..."
        />
      </div>

      <div className="calendar__description">
        <textarea
          {...register("description")}
          placeholder="add description..."
        />
      </div>

      <button className="btn" onClick={() => createCalendarEvent()}>
        Create Calendar Event
      </button>
    </S.Root>
  );
};
