import React from 'react'
import { useSelector } from 'react-redux'
import {
  //selectQuestionIndex,
  selectQuestions,
} from '../../redux/slices/questions/selectors'

const SideBar = () => {
  const questions = useSelector(selectQuestions)
  //const questionIndex = useSelector(selectQuestionIndex)

  return (
    <div>
        <h3>Side Bar</h3>
        {questions.map((question, index) => {
            return (
                <p key={index}>{question.title}</p>
            )
        })}
    </div>
  )
}

export default SideBar
