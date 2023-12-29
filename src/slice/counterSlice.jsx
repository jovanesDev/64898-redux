import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        value:0
}
const counterSlice = createSlice({
  name: '@counter',
  initialState,
  reducers: {
    sumar:(state,action)=> {
        state.value += action.payload
    },
    restar:(state,action) => {
        state.value -= action.payload
    },
    reset:(state) => {
        state.value = 0
    }
  }
});

export const {sumar,restar,reset} = counterSlice.actions

export default counterSlice.reducer