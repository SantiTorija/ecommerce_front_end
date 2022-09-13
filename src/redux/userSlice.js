import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login(state, action) {
      delete state.email;
      delete state.token;
      delete state.firstname;
      delete state.lastname;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.lastname = action.payload.lastname;
      state.firstname = action.payload.firstname;
      state.id = action.payload.id;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
    },
  },
});

const { actions, reducer } = userSlice;
export const { login } = actions;

export default reducer;
