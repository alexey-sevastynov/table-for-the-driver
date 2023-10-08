import { configureStore } from "@reduxjs/toolkit";
import { worksReducer } from "./slices/worksSlice";
import { customerReducer } from "./slices/customerSlice";
import { statisticReducer } from "./slices/statisticSlice";
import { calendarReducer } from "./slices/calendarSlice";

const store = configureStore({
  reducer: {
    works: worksReducer,
    customer: customerReducer,
    statistic: statisticReducer,
    calendar: calendarReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
