import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../Features/customerSlice";
import reservationReducer from "../Features/reservationSlice";

export const store = configureStore({
  // Here we will have our different slices
  reducer: {
    reservations: reservationReducer,
    customers: customerReducer,
  },
});

// Dynamic return of store state and dispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
