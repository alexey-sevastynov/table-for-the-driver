import React from "react";
import * as S from "./styles";
import {
  useSession,
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";

import DateTimePicker from "react-datetime-picker";

export const Calendar = () => {
  const calendarId =
    "a74d84041aec6206997b22c03dc8990f3e83f6ebc5d53cb2228fe291c0fb2407@group.calendar.google.com";
  // const calendarId = "primary";
  const apiKey = import.meta.env.API_GOOGLE_CALENDAR;

  const [start, setStart] = React.useState(new Date());
  const [end, setEnd] = React.useState(new Date());
  const [eventName, setEventName] = React.useState("");
  const [eventDescription, setEventDescription] = React.useState("");

  const session = useSession(); // tokens
  const supabase = useSupabaseClient(); // talk to supabase

  const { isLoading } = useSessionContext();

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
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: end.toISOString(),
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

  console.log(session);
  console.log(start);
  return (
    <S.Root>
      <div style={{ width: "400px", margin: "30px auto" }}>
        {session ? (
          <>
            <h2>Hey there {session.user.email}</h2>
            <p>start of your event</p>
            <DateTimePicker
              onChange={(newDate: Date | null) => {
                if (newDate !== null) {
                  setStart(newDate); // Assuming setStart accepts a Date as an argument
                }
              }}
              value={start}
            />
            <p>end of your event</p>
            <DateTimePicker
              onChange={(newDate: Date | null) => {
                if (newDate !== null) {
                  setEnd(newDate);
                }
              }}
              value={end}
            />
            <p>Event name</p>
            <input
              type="text"
              onChange={(e) => setEventName(e.target.value)}
              value={eventName}
            />
            <p>Event description</p>
            <input
              type="text"
              onChange={(e) => setEventDescription(e.target.value)}
              value={eventDescription}
            />

            <hr />

            <button onClick={() => createCalendarEvent()}>
              Create Calendar Event
            </button>
            <button onClick={() => getCalendarEvents()}>get request</button>
            <p></p>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <>
            <button onClick={() => googleSignIn()}>Sign In With Google</button>
          </>
        )}
      </div>
    </S.Root>
  );
};
