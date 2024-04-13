import React from 'react'
import Question from '../../components/Question'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectQuestionIndex,
  selectQuestions,
} from '../../redux/slices/questions/selectors'
import { resetQuestionsSlice, setQuestionIndex } from '../../redux/slices/questions/questionsSlice'
import { resetResultSlice, setResults } from '../../redux/slices/result/resultSlice'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../components/SideBar'
// import { selectAnswers } from '../../redux/slices/result/selectors'

const Quiz = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const questions = useSelector(selectQuestions)
  const questionIndex = useSelector(selectQuestionIndex)
  const question = questions[questionIndex]
  // const answers = useSelector(selectAnswers)

  const handleOption = ({ value, text }) => {
    dispatch(
      setResults({
        index: questionIndex,
        value: value,
        question: question,
        option: text,
      }),
    )
  }

  const handleNext = () => {
    if (questions.length > questionIndex + 1) {
      dispatch(setQuestionIndex(questionIndex + 1))
    } else {
      navigate('/result')
    }
  }

  const handleBack = () => {
    if (questionIndex > 0) {
      dispatch(setQuestionIndex(questionIndex - 1))
    } else {
      dispatch(resetQuestionsSlice())
      dispatch(resetResultSlice())
      navigate('/')
    }
  }

  return (
    <div>
      <SideBar />
      <Question
        question={question}
        handleOption={handleOption}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </div>
  )
}

export default Quiz
