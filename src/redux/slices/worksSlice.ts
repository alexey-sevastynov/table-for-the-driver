import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api-table-for-the-driver.vercel.app/";

export interface IWork {
  _id: string;
  id: number;
  day: number;
  month: number;
  year: number;
  customer: string;
  route?: string;
  hours: number;
  km: number;
  income?: number;
  expenditure?: number;
  description?: string;
  status?: number;
}

export type fetchPostWorkArgs = {
  id: number;
  day: number;
  month: number;
  year: number;
  customer: string;
  route?: string;
  hours: number;
  km: number;
  income?: number;
  expenditure?: number;
  description?: string;
  status: number;
};

export const fetchWorks = createAsyncThunk<IWork[]>(
  "works/fetchWorks",
  async () => {
    const { data } = await axios.get(`${API_URL}jobs`);

    return data;
  }
);

export const fetchPostWork = createAsyncThunk<IWork, fetchPostWorkArgs>(
  "workPost/fetchWorks",
  async (params) => {
    const { data } = await axios.post(`${API_URL}jobs`, params);

    return data;
  }
);

interface IWorkSlice {
  jobs: {
    items: [];
    status: string;
  };
}

const initialState: IWorkSlice = {
  jobs: {
    items: [],
    status: "loading",
  },
};

const worksSlice = createSlice({
  name: "worksSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWorks.pending, (state) => {
      state.jobs.items = [];
      state.jobs.status = "loading";
    });
    builder.addCase(fetchWorks.fulfilled, (state, action) => {
      //@ts-ignore
      state.jobs.items = action.payload;
      state.jobs.status = "loaded";
    });
    builder.addCase(fetchWorks.rejected, (state) => {
      state.jobs.items = [];
      state.jobs.status = "error";
    });

    builder.addCase(fetchPostWork.pending, (state) => {
      state.jobs.items = [];
      state.jobs.status = "loading";
    });
    builder.addCase(fetchPostWork.fulfilled, (state, action) => {
      //@ts-ignore
      state.jobs.items = [...state.jobs.items, action.payload];
      state.jobs.status = "loaded";
    });
    builder.addCase(fetchPostWork.rejected, (state) => {
      state.jobs.items = [];
      state.jobs.status = "error";
    });
  },
});

export const {} = worksSlice.actions;

export const worksReducer = worksSlice.reducer;
