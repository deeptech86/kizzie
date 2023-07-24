import React, { useState } from "react";

const FourDigitAddition = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };

  return (
    <div>
      <h1>Four Digit Addition</h1>
      <div>
        <label>Number 1:</label>
        <input type="number" value={num1} onChange={handleNum1Change} />
      </div>
      <div>
        <label>Number 2:</label>
        <input type="number" value={num2} onChange={handleNum2Change} />
      </div>
      <button onClick={handleAddition}>Add</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default FourDigitAddition;
