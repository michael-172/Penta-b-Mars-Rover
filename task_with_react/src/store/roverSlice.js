import { createSlice } from "@reduxjs/toolkit";

const roverSlice = createSlice({
  name: "rover Slice",
  initialState: { rover: { x: 0, y: 0, heading: 0 } },
  reducers: {
    incrementX(state) {
      state.rover.x++;
    },
    incrementY(state) {
      state.rover.y++;
    },
    decrementX(state) {
      state.rover.x--;
    },
    decrementY(state) {
      state.rover.y--;
    },
    rotateLeft(state) {
      if (state.rover.heading - 1 < 0) {
        state.rover.heading = 3;
      } else {
        state.rover.heading--;
      }
    },
    rotateRight(state) {
      if (state.rover.heading + 1 > 3) {
        state.rover.heading = 0;
      } else {
        state.rover.heading++;
      }
    },
    changeHeading(state, action) {
      state.rover.heading = action.payload;
    },
  },
});

export const {
  incrementX,
  incrementY,
  decrementX,
  decrementY,
  rotateLeft,
  rotateRight,
  changeHeading,
} = roverSlice.actions;
export default roverSlice.reducer;
