import React from "react";

const BMIResult = ({ bmi }) => {
  return (
    <div>
      <h2>Your BMI</h2>
      <p>{bmi}</p>
    </div>
  );
};

export default BMIResult;
