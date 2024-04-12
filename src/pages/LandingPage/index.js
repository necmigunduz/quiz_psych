import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function LandingPage() {
  return (
    <div className='container'>
      <h3 className='header'>Welcome to Introvert vs. Extrovert Psychology Quiz</h3>
      <article>
        <p className='text'>This page is prepared for a quiz to determine a personality is whether an extrovert or an introvert.
        Several questions are to be asked, and your answers will be analyzed to understand whether you are more extrovert or introvert. 
        Of course, this is a basic quiz prepared to develop a sense about your personality, and it is not considered as a scientific study.
        </p>
      </article>
      <Link to={'/quiz'} className='link'>Take the quiz</Link>
    </div>
  )
}

export default LandingPage