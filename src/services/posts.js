import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsByUser = createAsyncThunk(
  "posts/getPosts",
  async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("");
    }
  }
);
