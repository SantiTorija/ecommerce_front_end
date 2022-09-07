import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login(state, action) {
      delete state.username;
      delete state.token;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
  },
});

const { actions, reducer } = userSlice;
export const { login, logout } = actions;

export default reducer;
