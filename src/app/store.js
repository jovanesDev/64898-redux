import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";
import userSlice from "../slice/userSlice";
import postsSlice from "../slice/postsSlice";


const store = configureStore({
    reducer:{
        counter:counterSlice,
        users:userSlice,
        posts:postsSlice
    }
})

export default store