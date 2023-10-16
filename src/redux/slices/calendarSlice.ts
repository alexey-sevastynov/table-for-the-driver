import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import axios from "axios";
import { API_URL } from "../../constants";

export type TypeEventItem = {
  _id: string;
  dateStart: Date;
  dateEnd?: Date;
  customer: string;
  pointStart: string;
  pointEnd?: string;
  car: string;
  description?: string;
};

export const fetchAllEvents = createAsyncThunk<TypeEventItem[]>(
  "events/fetchEvents",
  async () => {
    const { data } = await axios.get(`${API_URL}events`);

    return data;
  }
);

export const fetchPostEvents = createAsyncThunk<
  TypeEventItem,
  {
    dateStart: Date;
    dateEnd: Date;
    pointStart: string;
    pointEnd: string;
    car: string;
    customer: string;
    description: string;
  }
>("eventsPost/fetchEvents", async (params) => {
  const { data } = await axios.post(`${API_URL}events`, params);

  return data;
});

type TypeInitialState = {
  allEvents: TypeEventItem[];
  status: "loading" | "loaded" | "error";

  monthIndex: number;
  isOpenPopup: boolean;
};

const initialState: TypeInitialState = {
  allEvents: [],
  status: "loading",

  monthIndex: dayjs().month(),
  isOpenPopup: false,
};

const calendarSlice = createSlice({
  name: "calendarSlice",
  initialState,
  reducers: {
    handlePrevMonth: (state) => {
      state.monthIndex = state.monthIndex - 1;
    },
    handleNextMonth: (state) => {
      state.monthIndex = state.monthIndex + 1;
    },
    handleReset: (state) => {
      state.monthIndex = dayjs().month();
    },
    openPopup: (state) => {
      state.isOpenPopup = true;
    },
    closePopup: (state) => {
      state.isOpenPopup = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllEvents.pending, (state) => {
      state.allEvents = [];
      state.status = "loading";
    });
    builder.addCase(fetchAllEvents.fulfilled, (state, action) => {
      state.allEvents = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAllEvents.rejected, (state) => {
      state.allEvents = [];
      state.status = "error";
    });
    builder.addCase(fetchPostEvents.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPostEvents.fulfilled, (state, action) => {
      state.allEvents = [...state.allEvents, action.payload];
      state.status = "loaded";
    });
    builder.addCase(fetchPostEvents.rejected, (state) => {
      state.allEvents = [];
      state.status = "error";
    });
  },
});

export const {
  handlePrevMonth,
  handleNextMonth,
  handleReset,
  openPopup,
  closePopup,
} = calendarSlice.actions;

export const calendarReducer = calendarSlice.reducer;
