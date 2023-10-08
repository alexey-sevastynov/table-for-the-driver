import { createSlice } from "@reduxjs/toolkit";

import dayjs from "dayjs";

type TypeInitialState = {
  monthIndex: number;
  isOpenPopup: boolean;
};

const initialState: TypeInitialState = {
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
});

export const {
  handlePrevMonth,
  handleNextMonth,
  handleReset,
  openPopup,
  closePopup,
} = calendarSlice.actions;

export const calendarReducer = calendarSlice.reducer;
