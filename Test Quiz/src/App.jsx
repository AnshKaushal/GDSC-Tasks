import React, { useState } from "react"
import { quizData } from "./quizData"

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState("")
  const [score, setScore] = useState(0)
  const [attemptedCount, setAttemptedCount] = useState(0)
  const [unattemptedCount, setUnattemptedCount] = useState(0)

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
  }

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 2)
    } else {
      setScore(score - 1)
    }

    setAttemptedCount(attemptedCount + 1)
    setCurrentQuestion(currentQuestion + 1)
    setSelectedOption("")
  }

  const handleSkipQuestion = () => {
    setUnattemptedCount(unattemptedCount + 1)
    setCurrentQuestion(currentQuestion + 1)
    setSelectedOption("")
  }

  return (
    <div className="container">
      <h1 className="title">Quiz App</h1>
      {currentQuestion < quizData.length ? (
        <div>
          <h2 className="question">Question {currentQuestion + 1}</h2>
          <p>{quizData[currentQuestion].question}</p>
          <ul className="options">
            {quizData[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`option ${
                  selectedOption === option ? "selected" : ""
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
          <div className="button-container">
            <button onClick={handleNextQuestion}>Next</button>
            <button onClick={handleSkipQuestion}>Skip</button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h2>Quiz Completed</h2>
          <p>Your Score: {score}</p>
          <p>Attempted: {attemptedCount}</p>
          <p>Unattempted: {unattemptedCount}</p>
        </div>
      )}
    </div>
  )
}

export default App
