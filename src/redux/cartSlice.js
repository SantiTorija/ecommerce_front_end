import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "wine",
  initialState: [],
  reducers: {
    addFirstTime(state, action) {
      state.push({ ...action.payload });
    },
    add(state, action) {
      const wine = state.find((element) => element._id === action.payload.id);
      wine.cartQuantity = parseInt(wine.cartQuantity) + parseInt(action.payload.quantity);
      state = [...state, wine];
    },
    setNumber(state, action) {
      const wine = state.find((element) => element._id === action.payload.id);
      wine.cartQuantity = parseInt(action.payload.quantity);
      state = [...state, wine];
    },
    deleteItem(state, action) {
      return state.filter((element) => element._id !== action.payload.id);
    },
    deleteAllItems(state, action) {
      return [];
    },
  },
});

const { actions, reducer } = cartSlice;
export const { add, addFirstTime, setNumber, deleteItem, deleteAllItems } = actions;

export default reducer;
