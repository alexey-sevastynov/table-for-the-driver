import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWork } from "./worksSlice";

type TypeInitialState = {
  currentDay: IWork[] | [];
  totalHours: number;
  totalKm: number;
  totalIncome: number;
  totalUknownIncome: number;
  totalMeIncome: number;
  totalOtherIncome: number;
  totalDebt: number;
  totalExpenditure: number;
};

const initialState: TypeInitialState = {
  currentDay: [],
  totalHours: 0,
  totalKm: 0,
  totalIncome: 0,
  totalUknownIncome: 0,
  totalMeIncome: 0,
  totalOtherIncome: 0,
  totalDebt: 0,
  totalExpenditure: 0,
};

const statisticSlice = createSlice({
  name: "statisticSlice",
  initialState,
  reducers: {
    setCurrentDay: (state, action: PayloadAction<IWork[]>) => {
      state.currentDay = action.payload;
    },
    getTotalStaticsDay: (state) => {
      //@ts-ignore
      state.totalHours = state.currentDay.reduce(
        (sum: number, current: IWork) => sum + current.hours,
        0
      );
      //@ts-ignore
      state.totalKm = state.currentDay.reduce(
        (sum: number, current: IWork) => sum + current.km,
        0
      );
      //@ts-ignore
      state.totalIncome = state.currentDay.reduce(
        (sum: number, current: IWork) => sum + (current.income || 0),
        0
      );
      //@ts-ignore
      state.totalExpenditure = state.currentDay.reduce(
        (sum: number, current: IWork) => sum + (current.expenditure || 0),
        0
      );
      state.totalMeIncome = state.currentDay
        .filter((item) => item.status === 1)
        .reduce(
          (sum: number, current: IWork) => sum + (current.income || 0),
          0
        );
      state.totalUknownIncome = state.currentDay
        .filter((item) => item.status === 2)
        .reduce(
          (sum: number, current: IWork) => sum + (current.income || 0),
          0
        );
      state.totalDebt = state.currentDay
        .filter((item) => item.status === 3)
        .reduce(
          (sum: number, current: IWork) => sum + (current.income || 0),
          0
        );

      state.totalOtherIncome = state.currentDay
        .filter((item) => item.status === 4)
        .reduce(
          (sum: number, current: IWork) => sum + (current.income || 0),
          0
        );
    },
    // setRate: (state, action: PayloadAction<number>) => {
    //   state.rate = action.payload;
    // },
    // addCustomer: (state, action: PayloadAction<TypeCustomerItem>) => {
    //   state.items = [...state.items, action.payload];
    // },
    // deleteCustomer: (state, action: PayloadAction<string>) => {
    //   state.items = state.items.filter(
    //     (item) => item.customer !== action.payload
    //   );
    // },
    // findEditItem: (state, action: PayloadAction<TypeCustomerItem>) => {
    //   state.customerItem = action.payload;
    // },
  },
});

export const { setCurrentDay, getTotalStaticsDay } = statisticSlice.actions;

export const statisticReducer = statisticSlice.reducer;
