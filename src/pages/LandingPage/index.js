import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { useDispatch } from 'react-redux'
import { setQuestions } from '../../redux/slices/questions/questionsSlice'
import Questions from '../../questions'

function LandingPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setQuestions(Questions))
  })

  return (
    <div className='container'>
      <h3 className='header'>Welcome to Introvert vs. Extrovert Psychology Quiz</h3>
      <article>
        <ul>
          <li>
            <p className='text'>This page is prepared for a quiz to determine a personality is whether an extrovert or an introvert.</p>
          </li>
          <li>
            <p className='text'>Several questions are asked, and your answers will be analyzed to develop a sense whether you are more extrovert or introvert.</p>
          </li>
          <li>
            <p className='text'>Of course, this is a basic quiz prepared to develop a sense about your personality, and it is not considered as a scientific study.</p>
          </li>
        </ul>

      </article>
      <Link to={'/quiz'} className='link' >Take the quiz</Link>
    </div>
  )
}

export default LandingPage