import React from "react";
import * as S from "./styles";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";

import { useForm, SubmitHandler } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fetchAllOptions } from "../../redux/slices/customerSlice";

import { getMonth } from "../../helpers/getMonth";
import { CalendarHeader } from "../../componets/calendar-header/CalendarHeader";

import { CalendarMonth } from "../../componets/calendar-month/CalendarMonth";
import { CalendarAddEvent } from "../../componets/calendar-add-event/CalendarAddEvent";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Inputs = {
  customerInput: string;
  customerSelect: string;
  addressStart: string;
  description: string;
};

export const MyCalendar = () => {
  const monthIndex = useAppSelector((state) => state.calendar.monthIndex);
  const isOpenPopup = useAppSelector((state) => state.calendar.isOpenPopup);
  const dispatch = useAppDispatch();

  const calendarId =
    "a74d84041aec6206997b22c03dc8990f3e83f6ebc5d53cb2228fe291c0fb2407@group.calendar.google.com";
  // const calendarId = "primary";
  const apiKey = " AIzaSyA7fJvHGXVhnf58SIfZf7pqE8L4TEoixMA";

  const [car, setCar] = React.useState<"Reno" | "Mercedes" | "Any">("Any");
  const [valueDate, onChangeDate] = React.useState<Value>(new Date());
  const [valueTimeStart, onChangeTimeStart] = React.useState<string | null>(
    "9:00"
  );
  const [valueTimeFinish, onChangeTimeFinish] = React.useState<string | null>(
    "11:00"
  );

  const [currentMonth, setCurrentMonth] = React.useState(getMonth());

  const [dataEvent, setDataEvent] = React.useState([]);

  const session = useSession(); // tokens
  const supabase = useSupabaseClient(); // talk to supabase

  const { isLoading } = useSessionContext();

  const { register, handleSubmit, getValues } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = () => {};

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
      setDataEvent(data.items);
      // Handle the data, which will contain information about the calendar's events.
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  }

  async function createCalendarEvent() {
    if (
      customer &&
      valueDate &&
      valueTimeStart &&
      valueTimeFinish &&
      typeof valueDate === "object" &&
      valueDate instanceof Date
    ) {
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
        })
        .finally(() => getCalendarEvents());
    }
  }

  React.useEffect(() => {
    dispatch(fetchAllOptions());
    getCalendarEvents();
  }, []);

  React.useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <S.Root onSubmit={handleSubmit(onSubmit)} popupActive>
      {session ? (
        <div>
          <CalendarHeader />
          {isOpenPopup && (
            <CalendarAddEvent
              session={session}
              register={register}
              onChangeTimeStart={onChangeTimeStart}
              valueTimeStart={valueTimeStart}
              onChangeTimeFinish={onChangeTimeFinish}
              valueTimeFinish={valueTimeFinish}
              setCar={setCar}
              car={car}
              onChangeDate={onChangeDate}
              valueDate={valueDate}
              createCalendarEvent={createCalendarEvent}
            />
          )}
          <div className="my-calendar__main">
            <CalendarMonth month={currentMonth} dataEvent={dataEvent} />
          </div>
        </div>
      ) : (
        <button className="btn" onClick={() => googleSignIn()}>
          Sign In With Google
        </button>
      )}

      <button className="btn" onClick={() => signOut()}>
        Sign Out
      </button>
    </S.Root>
  );
};
