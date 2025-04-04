import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const pro = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id == pro.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...pro, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const proId = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === proId
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== proId);
      }
    },
  },
});
export const { addToCart, removeFromCart } = CounterSlice.actions;
export default CounterSlice.reducer;
