import { createSlice } from "@reduxjs/toolkit";
import { getPostsByUser } from "../services/posts";

const initialState = {
  posts: [],
  loading: false,
  error: false,
};

const postsSlice = createSlice({
  name: "@posts",
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.posts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPostsByUser.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getPostsByUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.posts = action.payload;
    });
    builder.addCase(getPostsByUser.rejected, (state) => {
      state.loading = false;
      state.error = true;
      state.posts = [];
    });
  },
});

export const { clearPosts } = postsSlice.actions;

export default postsSlice.reducer;
