import { createSlice } from "@reduxjs/toolkit";

export type Student = {
  name: string;
  slot: string;
  age: number;
};

const StudentSlice = createSlice({
  name: "student",
  initialState: {
    name: "",
    slot: "",
    age: 0,
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateSlot: (state, action) => {
      state.slot = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { updateName, updateSlot, updateAge } = StudentSlice.actions;

export default StudentSlice.reducer;

export const selectName = (state: { student: Student }) => state.student.name;
export const selectSlot = (state: { student: Student }) => state.student.slot;
export const selectAge = (state: { student: Student }) => state.student.age;
export const selectStudent = (state: { student: Student }) => state.student;
