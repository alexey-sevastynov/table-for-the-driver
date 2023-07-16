import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

type deleteDayWorkArgs = {
  day: number;
  month: number;
  year: number;
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

export const deleteWork = createAsyncThunk<IWork, { id: string }>(
  "workDelete/fetchWorks",
  async (params) => {
    const { id } = params;
    console.log(id);
    const { data } = await axios.delete(`${API_URL}jobs/${id}`);

    return data;
  }
);

export const deleteDayWork = createAsyncThunk<IWork, deleteDayWorkArgs>(
  "workDeleteDay/fetchWorks",
  async (params) => {
    const { day, month, year } = params;

    const { data } = await axios.delete(
      `${API_URL}jobs/allDay/${day}/${month}/${year}`
    );

    return data;
  }
);

export const editWork = createAsyncThunk<IWork, IWork>(
  "workEditDay/fetchWorks",
  async (params) => {
    const {
      _id,
      id,
      day,
      month,
      year,
      customer,
      route,
      hours,
      km,
      income,
      expenditure,
      description,
      status,
    } = params;

    console.log(params);

    const { data } = await axios.patch(`${API_URL}jobs/${_id}`, {
      id,
      day,
      month,
      year,
      customer,
      route,
      hours,
      km,
      income,
      expenditure,
      description,
      status,
    });

    return data;
  }
);

interface IWorkSlice {
  jobs: {
    items: [];
    status: string;
  };

  isAuth: boolean;
}

const initialState: IWorkSlice = {
  jobs: {
    items: [],
    status: "loading",
  },
  isAuth: false,
};

const worksSlice = createSlice({
  name: "worksSlice",
  initialState,
  reducers: {
    loginIn: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
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

    builder.addCase(deleteDayWork.pending, (state) => {
      state.jobs.status = "loading";
    });
    builder.addCase(deleteDayWork.fulfilled, (state) => {
      state.jobs.status = "loaded";
    });
    builder.addCase(deleteDayWork.rejected, (state) => {
      state.jobs.status = "error";
    });

    builder.addCase(deleteWork.pending, (state) => {
      state.jobs.status = "loading";
    });
    builder.addCase(deleteWork.fulfilled, (state) => {
      state.jobs.status = "loaded";
    });
    builder.addCase(deleteWork.rejected, (state) => {
      state.jobs.status = "error";
    });

    builder.addCase(editWork.pending, (state) => {
      state.jobs.status = "loading";
    });
    builder.addCase(editWork.fulfilled, (state) => {
      state.jobs.status = "loaded";
    });
    builder.addCase(editWork.rejected, (state) => {
      state.jobs.status = "error";
    });
  },
});

export const { loginIn } = worksSlice.actions;

export const worksReducer = worksSlice.reducer;
