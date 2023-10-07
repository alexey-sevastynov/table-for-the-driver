import React from "react";
import * as S from "./styles";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";

import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchAllOptions } from "../../redux/slices/customerSlice";
import { CARS } from "../../constants";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type Inputs = {
  customerInput: string;
  customerSelect: string;
  addressStart: string;
  description: string;
};

export const MyCalendar = () => {
  const listCustomers = useAppSelector((state) => state.customer.items);
  const dispatch = useAppDispatch();

  const calendarId =
    "a74d84041aec6206997b22c03dc8990f3e83f6ebc5d53cb2228fe291c0fb2407@group.calendar.google.com";
  // const calendarId = "primary";
  const apiKey = " AIzaSyA7fJvHGXVhnf58SIfZf7pqE8L4TEoixMA";

  const [car, setCar] = React.useState("Any");
  const [valueDate, onChangeDate] = React.useState<Value>(new Date());
  const [valueTimeStart, onChangeTimeStart] = React.useState<string | null>(
    "9:00"
  );
  const [valueTimeFinish, onChangeTimeFinish] = React.useState<string | null>(
    "11:00"
  );

  const session = useSession(); // tokens
  const supabase = useSupabaseClient(); // talk to supabase

  const { isLoading } = useSessionContext();

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const customerInput = getValues("customerInput");
  const customerSelect = getValues("customerSelect");

  const customer = customerInput === "" ? customerSelect : customerInput;

  if (isLoading) {
    return <></>;
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
      },
    });
    if (error) {
      alert("error loging in to Google provider with Supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  async function getCalendarEvents() {
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + session?.provider_token,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to retrieve calendar events.");
      }

      const data = await response.json();
      console.log(data.items);
      // Handle the data, which will contain information about the calendar's events.
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  }

  async function createCalendarEvent() {
    if (customer && valueDate && valueTimeStart && valueTimeFinish) {
      const year = valueDate.getFullYear();
      const month = valueDate.getMonth();
      const day = valueDate.getDate();

      const hourStart = +valueTimeStart?.slice(0, -3);
      const minutesStart = +valueTimeStart?.substr(-2);
      const hourFinish = +valueTimeFinish?.slice(0, -3);
      const minutesFinish = +valueTimeFinish?.substr(-2);

      const start = new Date(year, month, day, hourStart, minutesFinish, 0);
      const finish = new Date(year, month, day, hourFinish, minutesStart, 0);

      console.log(start);
      console.log(finish);

      const startPoint = getValues("addressStart");
      const eventDescription = getValues("description");

      const event = {
        summary: `${customer} at ${valueTimeStart} (${car}), start point: ${startPoint} `,
        description: eventDescription,
        start: {
          dateTime: start.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
        end: {
          dateTime: finish.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      };

      await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + session?.provider_token,
          },
          body: JSON.stringify(event),
        }
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data);
          alert("Event created, check your Google Calendar");
        });
    }
  }

  React.useEffect(() => {
    dispatch(fetchAllOptions());
  }, []);

  return (
    <S.Root onSubmit={handleSubmit(onSubmit)}>
      {session ? (
        <>
          <h2>Hey there {session.user.email}</h2>
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
              {CARS.map((itemCar) => (
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

          <div className="calendar__date">
            <Calendar onChange={onChangeDate} value={valueDate} locale="en" />
          </div>

          <div className="calendar__customer">
            <input
              type="text"
              {...register("addressStart")}
              placeholder="the place start..."
            />
          </div>

          <div className="calendar__description">
            <textarea {...register("description")} />
          </div>

          <button className="btn" onClick={() => createCalendarEvent()}>
            Create Calendar Event
          </button>
          <button className="btn" onClick={() => getCalendarEvents()}>
            get request
          </button>
          <p></p>
          <button className="btn" onClick={() => signOut()}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <button className="btn" onClick={() => googleSignIn()}>
            Sign In With Google
          </button>
        </>
      )}
    </S.Root>
  );
};
