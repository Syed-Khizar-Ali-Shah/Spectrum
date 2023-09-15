import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: {},
  user: {},
  searchPatients : []
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
    setSearchPatients : (state, action) => {
      state.searchPatients = action.payload;
      console.log("searchPatients", state.searchPatients);
    },
  },
});

export const {
  setUser,
  setToken,
  setSearchPatients
} = spectrumSlice.actions;
export default spectrumSlice.reducer;
