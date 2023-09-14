import { configureStore } from "@reduxjs/toolkit";
import student from "../models/student";

const store = configureStore({
  reducer: {
    student,
  },
});

export default store;
