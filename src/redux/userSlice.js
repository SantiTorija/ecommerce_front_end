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
      delete state.id;
      delete state.address;
      delete state.phone;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.lastname = action.payload.lastname;
      state.firstname = action.payload.firstname;
      state.id = action.payload.id;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
    },
    updateUser(state, action) {
      state.email = action.payload.email;
      state.lastname = action.payload.lastname;
      state.firstname = action.payload.firstname;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
    },
    logout(state, action) {
      delete state.email;
      delete state.token;
      delete state.firstname;
      delete state.lastname;
      delete state.id;
      delete state.address;
      delete state.phone;
    },
  },
});

const { actions, reducer } = userSlice;
export const { login, updateUser, logout } = actions;

export default reducer;
