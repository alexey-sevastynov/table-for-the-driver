import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api-table-for-the-driver.vercel.app/";

type TypeCustomerItem = {
  _id: string;
  customer: string;
  hour: number;
  km: number;
};

export const fetchAllOptions = createAsyncThunk<TypeCustomerItem[]>(
  "options/fetchOptions",
  async () => {
    const { data } = await axios.get(`${API_URL}options`);

    return data;
  }
);

export const fetchPostOption = createAsyncThunk<
  TypeCustomerItem,
  { customer: string; hour: number; km: number }
>("optionPost/fetchOptions", async (params) => {
  const { data } = await axios.post(`${API_URL}options`, params);

  return data;
});

export const deleteOption = createAsyncThunk<
  TypeCustomerItem[],
  { id: string }
>("optionDelete/fetchOptions", async (params) => {
  const { id } = params;

  const { data } = await axios.delete(`${API_URL}options/${id}`);

  return data;
});

export const editOption = createAsyncThunk<TypeCustomerItem, TypeCustomerItem>(
  "optionEdit/fetchOptions",
  async (params) => {
    const { _id, customer, hour, km } = params;

    const { data } = await axios.patch(`${API_URL}options/${_id}`, {
      customer,
      hour,
      km,
    });

    return data;
  }
);

export const getOneSalary = createAsyncThunk<{
  percent: number;
  rate: number;
}>("getSalary/fetchSalary", async () => {
  const { data } = await axios.get(
    `${API_URL}salaries/64ad672639cd0103a96fac57`
  );

  return data;
});

export const editSalary = createAsyncThunk<
  { _id: string; percent: number; rate: number },
  { percent: number; rate: number }
>("salaryEdit/fetchSalary", async (params) => {
  const { percent, rate } = params;

  const { data } = await axios.patch(
    `${API_URL}salaries/64ad672639cd0103a96fac57`,
    {
      percent,
      rate,
    }
  );

  return data;
});

type TypeInitialState = {
  percent: number | undefined;
  rate: number | undefined;
  customerItem: TypeCustomerItem;

  items: TypeCustomerItem[];
  status: string;
};

const initialState: TypeInitialState = {
  percent: undefined,
  rate: undefined,
  customerItem: {
    _id: "",
    customer: "",
    hour: 350,
    km: 17,
  },

  items: [],
  status: "",
};

const customerSlice = createSlice({
  name: "worksSlice",
  initialState,
  reducers: {
    setPercent: (state, action: PayloadAction<number>) => {
      state.percent = action.payload;
    },
    setRate: (state, action: PayloadAction<number>) => {
      state.rate = action.payload;
    },
    addCustomer: (state, action: PayloadAction<TypeCustomerItem>) => {
      state.items = [...state.items, action.payload];
    },

    deleteCustomer: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.customer !== action.payload
      );
    },
    findEditItem: (state, action: PayloadAction<TypeCustomerItem>) => {
      state.customerItem = action.payload;
    },

    // editItem: (state, action: PayloadAction<TypeCustomerItem>) => {
    //   state.items = state.items.map((obj) =>
    //     obj.customer === state.customerItem.customer
    //       ? {
    //           customer: action.payload.customer,
    //           hour: action.payload.hour,
    //           km: action.payload.km,
    //         }
    //       : { ...obj }
    //   );
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllOptions.pending, (state) => {
      state.items = [];
      state.status = "loading";
    });
    builder.addCase(fetchAllOptions.fulfilled, (state, action) => {
      //@ts-ignore
      state.items = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAllOptions.rejected, (state) => {
      state.items = [];
      state.status = "error";
    });

    builder.addCase(fetchPostOption.pending, (state) => {
      state.items = [];
      state.status = "loading";
    });
    builder.addCase(fetchPostOption.fulfilled, (state, action) => {
      //@ts-ignore
      state.items = [...state.items, action.payload];
      state.status = "loaded";
    });
    builder.addCase(fetchPostOption.rejected, (state) => {
      state.items = [];
      state.status = "error";
    });

    builder.addCase(deleteOption.fulfilled, (state) => {
      state.status = "loaded";
    });
    builder.addCase(deleteOption.rejected, (state) => {
      state.status = "error";
    });

    builder.addCase(editOption.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(editOption.fulfilled, (state) => {
      state.status = "loaded";
    });
    builder.addCase(editOption.rejected, (state) => {
      state.status = "error";
    });

    builder.addCase(getOneSalary.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getOneSalary.fulfilled, (state, action) => {
      state.percent = action.payload.percent;
      state.rate = action.payload.rate;
      state.status = "loaded";
    });
    builder.addCase(getOneSalary.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const {
  setPercent,
  setRate,
  addCustomer,
  deleteCustomer,
  findEditItem,
  // editItem,
} = customerSlice.actions;

export const customerReducer = customerSlice.reducer;
