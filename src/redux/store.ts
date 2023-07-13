import { configureStore } from "@reduxjs/toolkit";
import { worksReducer } from "./slices/worksSlice";
import { customerReducer } from "./slices/customerSlice";
import { statisticReducer } from "./slices/statisticSlice";

const store = configureStore({
  reducer: {
    works: worksReducer,
    customer: customerReducer,
    statistic: statisticReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
