import React, { useState } from 'react'
import Question from '../../components/Question'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectQuestionIndex,
  selectQuestions,
} from '../../redux/slices/questions/selectors'
import {
  resetQuestionsSlice,
  setQuestionIndex,
} from '../../redux/slices/questions/questionsSlice'
import { resetResultSlice, setResults } from '../../redux/slices/result/resultSlice'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import { selectAnswers } from '../../redux/slices/result/selectors'
import WarningModal from '../../components/WarningModal'

const Quiz = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const questions = useSelector(selectQuestions)
  const questionIndex = useSelector(selectQuestionIndex)
  const question = questions[questionIndex]
  const answers = useSelector(selectAnswers)
  const [showWarning, setShowWarning] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const handleOption = ({ value, text }) => {
    setSelectedOption(text)
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
    if (answers[questionIndex]) {
      if (questions.length > questionIndex + 1) {
        dispatch(setQuestionIndex(questionIndex + 1))
      } else {
        navigate('/result')
      }
      setShowWarning(false)
    } else {
      setShowWarning(true)
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
    setShowWarning(false)
  }

  return (
    <>
      <div>
        <SideBar />
        <Question
          question={question}
          handleOption={handleOption}
          handleNext={handleNext}
          handleBack={handleBack}
          selected={selectedOption}
        />
      </div>
      {showWarning && (
        <WarningModal
          warningtext={'You need to select an option!'}
          onClose={() => setShowWarning(false)}
        />
      )}
    </>
  )
}

export default Quiz
