import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./Contact/ContactSlice";

export const store = configureStore({
  reducer: {
    contact: contactSlice,
  },
});
