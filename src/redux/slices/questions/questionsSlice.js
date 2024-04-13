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
    resetQuestionsSlice: () => {
      return initialState
    },
  }
})

export const { setQuestions, setQuestionIndex, resetQuestionsSlice } = questionsSlice.actions

export default questionsSlice.reducer
