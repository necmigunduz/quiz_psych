import { configureStore } from '@reduxjs/toolkit'
import questionsReducer from './slices/questions/questionsSlice'
import resultReducer from './slices/result/resultSlice'

const store = configureStore({
  reducer: {
    questions: questionsReducer,
    result: resultReducer,
  },
})

export default store