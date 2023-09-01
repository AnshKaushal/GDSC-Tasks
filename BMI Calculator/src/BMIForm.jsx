import React, { useState } from "react"

const BMIForm = ({ calculateBMI }) => {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")

  const handleCalculate = () => {
    calculateBMI(weight, height)
  }

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div className="input-container">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate BMI</button>
    </div>
  )
}

export default BMIForm
