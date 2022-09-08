import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "wine",
  initialState: [],
  reducers: {
    cart(state, action) {
      state.push({ ...action.payload });
    },
  },
});

const { actions, reducer } = cartSlice;
export const { cart } = actions;

export default reducer;
