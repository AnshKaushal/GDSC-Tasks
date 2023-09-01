import React, { useState } from "react"
import BMIForm from "./BMIForm"
import BMIResult from "./BMIResult"

function App() {
  const [bmi, setBMI] = useState(null)

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(
      2
    )
    setBMI(calculatedBMI)
  }

  return (
    <div className="App">
      <BMIForm calculateBMI={calculateBMI} />
      {bmi && <BMIResult bmi={bmi} />}
    </div>
  )
}

export default App
