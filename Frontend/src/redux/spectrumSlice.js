import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: {},
  user: {},
};

export const spectrumSlice = createSlice({
  name: "spectrum",
  initialState,
  reducers: {
  
    setUser: (state, action) => {
      state.user = action.payload;
      console.log("testuser", state.user);
    },
    setToken: (state, action) => {
      state.token = action.payload;
      console.log("testtoken", state.token);
    },
  },
});

export const {
  setUser,
  setToken,
} = spectrumSlice.actions;
export default spectrumSlice.reducer;
