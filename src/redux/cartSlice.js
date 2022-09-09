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
      wine.cartQuantity =
        parseInt(wine.cartQuantity) + parseInt(action.payload.quantity);
      state = [...state, wine];
    },
    setNumber(state, action) {
      const wine = state.find((element) => element._id === action.payload.id);
      wine.cartQuantity = parseInt(action.payload.quantity);
      state = [...state, wine];
    },
    deleteItem(state, action) {
      for (let item of state) {
        console.log(item._id === action.payload.id);
        console.log(action.payload.id);
      }
      return state.filter((element) => element._id !== action.payload.id);

    }
  },
});

const { actions, reducer } = cartSlice;
export const { add, addFirstTime, setNumber, deleteItem } = actions;

export default reducer;
