import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login(state, action) {
      delete state.username;
      delete state.token;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
});

const { actions, reducer } = userSlice;
export const { login } = actions;

export default reducer;
