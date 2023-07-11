import { configureStore } from "@reduxjs/toolkit";
import { worksReducer } from "./slices/worksSlice";
import { customerReducer } from "./slices/customerSlice";

const store = configureStore({
  reducer: { works: worksReducer, customer: customerReducer },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
