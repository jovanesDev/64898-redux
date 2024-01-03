import { createSlice } from "@reduxjs/toolkit";
import { getUser, getUsers } from "../services/users";

const initialState = {
  users: [],
  user: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "@user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    // Users multiple
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = false;
    });

    // User singular
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.user = null;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.user = null;
    });
  },
});

// export const { } = userSlice.actions;

export default userSlice.reducer;
