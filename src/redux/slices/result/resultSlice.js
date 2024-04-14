import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  answers: [],
}

const resultSlice = createSlice({
  name: 'resultSlice',
  initialState,
  reducers: {
    setResults: (state, action) => {
      const { index } = action.payload
      const existingAnswerIndex = state.answers.findIndex(item => item.index === index)
      if (existingAnswerIndex !== -1) {
        state.answers[existingAnswerIndex] = action.payload
      } else {
        state.answers.push(action.payload)
      }
    },
    resetResultSlice: () => {
      return initialState
    },
  },
})

export const { setResults, resetResultSlice } = resultSlice.actions

export default resultSlice.reducer
