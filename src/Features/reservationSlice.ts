import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ReservationType = {
  value: string[];
};

// We defined its type outlined
const initialState: ReservationType = {
  value: [],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    // Here the type of action is defined inline -PayloadAction<string>-
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
      // Remove one element starting from the given index (action.payload)
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
