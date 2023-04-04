import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CustomerType = {
  value: customer[];
};

export type customer = {
  id: string;
  name: string;
  food: string[];
};

type AddFoodType = {
  id: string;
  food: string;
};

// We defined its type outlined
const initialState: CustomerType = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action: PayloadAction<AddFoodType>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
    removeCustomer: (state, action: PayloadAction<string>) => {
      let index = state.value.findIndex((customer) => {
        return customer.id === action.payload;
      });

      state.value.splice(index, 1);
    },
  },
});

export const { addCustomer, addFoodToCustomer, removeCustomer } =
  customerSlice.actions;
export default customerSlice.reducer;
