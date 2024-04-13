import React from 'react'
import './style.css'

const Question = ({ question, handleOption, handleNext, handleBack, selected }) => {
  return (
    <div>
      <h2>{question.title}</h2>
      <p>{question.question}</p>
      {question.options.map((option, index) => (
        <div key={index} className="optionContainer">
          <button
            onClick={() => handleOption(option)}
            className={selected === option.text ? 'selectedOption' : ''}>
            {option.text}
          </button>
        </div>
      ))}
      <button onClick={handleBack}>Go to previous</button>
      <button onClick={handleNext}>Go to next</button>
    </div>
  )
}

export default Question
