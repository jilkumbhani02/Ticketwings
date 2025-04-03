import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      if(state.quantity > 0
        )
      {
        state.quantity -= 1;
      }
    },
  },
});
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
