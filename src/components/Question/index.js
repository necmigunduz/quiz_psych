import React from 'react'

const Question = ({ question, handleOption, handleNext, handleBack }) => {
  return (
    <div>
      <h2>{question.title}</h2>
      <p>{question.question}</p>
      {question.options.map((option, index) => (
        <div key={index}>
          <button onClick={() => handleOption(option)}>{option.text}</button>
        </div>
      ))}
      <button onClick={handleBack}>Go to previous</button>
      <button onClick={handleNext}>Go to next</button>
    </div>
  )
}

export default Question
