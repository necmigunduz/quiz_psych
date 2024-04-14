import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import {
  selectQuestionIndex,
  selectQuestions,
} from '../../redux/slices/questions/selectors'

const SideBar = () => {
  const questions = useSelector(selectQuestions)
  const questionIndex = useSelector(selectQuestionIndex)
  const currentQuestion = questions[questionIndex]

  return (
    <div className='sideContainer'>
        <h3 className='sideHeader'>Sections</h3>
        {questions.map((question, index) => {
            return (
                <p key={index} className={question.title === currentQuestion.title ? 'currentTitle' : 'side'}>{question.title}</p>
            )
        })}
    </div>
  )
}

export default SideBar
