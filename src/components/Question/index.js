import React from 'react'
import './style.css'

const Question = ({ question, handleOption, handleNext, handleBack, selected }) => {
  return (
    <div className="questionContainer">
      <div className="questionBox">
        <h2>{question.title}</h2>
        <p>{question.question}</p>
      </div>
      {question.options.map((option, index) => (
        <div key={index} className="optionContainer">
          <button
            onClick={() => handleOption(option)}
            className={selected === option.text ? 'selectedOption' : 'option'}>
            {option.text}
          </button>
        </div>
      ))}
      <div className="btnBox">
        <button className="btn" onClick={handleBack}>
          Previous
        </button>
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Question
