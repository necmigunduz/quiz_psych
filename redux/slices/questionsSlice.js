import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: [],
  questionIndex: 0,
}

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload
    },
    setQuestionIndex: (state, action) => {
      state.questionIndex = action.payload
    },
  },
  extraReducers: {},
})

export const { setQuestions, setQuestionIndex } = questionsSlice.actions

export default questionsSlice.reducer
