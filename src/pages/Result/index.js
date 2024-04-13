import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resetQuestionsSlice } from '../../redux/slices/questions/questionsSlice'
import { resetResultSlice } from '../../redux/slices/result/resultSlice'

function Result() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGoHome = () => {
    dispatch(resetQuestionsSlice())
    dispatch(resetResultSlice())
    navigate('/')
  }

  return (
    <div>
      <button onClick={handleGoHome}>Go back to home</button>
    </div>
  )
}

export default Result
