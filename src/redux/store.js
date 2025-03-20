import { configureStore } from "@reduxjs/toolkit";
import psycologistReducer from "./psychologistSlice.js";

export const store = configureStore({
  reducer: { psychologists: psycologistReducer },
});
