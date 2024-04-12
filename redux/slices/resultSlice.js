import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  results: [],
}

const resultSlice = createSlice({
  name: 'resultSlice',
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results.push(action.payload)
    },
  },
  extraReducers: {},
})

export const { setResults } = resultSlice.actions

export default resultSlice.reducer
