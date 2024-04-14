import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetQuestionsSlice } from '../../redux/slices/questions/questionsSlice'
import { resetResultSlice } from '../../redux/slices/result/resultSlice'
import { selectAnswers } from '../../redux/slices/result/selectors'
import { sumValues } from '../../utils/utils'

function Result() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGoHome = () => {
    dispatch(resetQuestionsSlice())
    dispatch(resetResultSlice())
    navigate('/')
  }

  
  const answers = useSelector(selectAnswers)
 
  const sum = sumValues(answers)
  const threshHold = 5 
  
  return (
    <div className='resultContainer'>
      <h3>YOUR ANSWERS</h3>
      {answers.map((answer, index) => (
        <div key={index} className='yourAnswers'>
        <h4>{answer.question.question}</h4>
        <p>{answer.option}</p>
        </div>
      ))}
      <h3>RESULT</h3>
      <p>Your personality type is more <strong><i>{sum > threshHold ? 'extrovert' : 'introvert'}</i></strong>.</p>
      <button className='homeBtn' onClick={handleGoHome}>Retake Extrovert vs. Introvert Quiz</button>
    </div>
  )
}

export default Result
