import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  // Ejemplo para hacer le fallar (rejected)
  //   const user = new Promise((resolve, reject) => {
  //     return reject("algo salio ma");
  //   });
  //   return user
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw Error(error.message);
  }
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});
