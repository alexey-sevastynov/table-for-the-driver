import { configureStore } from "@reduxjs/toolkit";
import { worksReducer } from "./slices/worksSlice";

const store = configureStore({
  reducer: { works: worksReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
