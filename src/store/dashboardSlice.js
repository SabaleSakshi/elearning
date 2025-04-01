import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: [],
  reducers: {
    addToBoard: (state, action) => {
        const course = action.payload;
      const isAlreadyEnrolled = state.some((item) => item.id === course.id);

      if (!isAlreadyEnrolled) {
        state.push(course);
      }
    },
    removeFromBoard: (state, action) => {
        return state.filter((item) => item.id !== action.payload.id);
      },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
