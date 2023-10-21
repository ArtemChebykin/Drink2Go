import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterReducer";

export const store = configureStore({
  reducer: {
    filterSlice,
  },
});
