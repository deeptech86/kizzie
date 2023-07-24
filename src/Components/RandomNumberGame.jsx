import React, { useState, useEffect } from "react";
import "../Components/RandomNumberGame.css";

const RandomNumberGame = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const generateRandomNumbers = () => {
    const random1 = Math.floor(Math.random() * 9000) + 1000;
    const random2 = Math.floor(Math.random() * 9000) + 1000;
    setNumber1(random1.toString());
    setNumber2(random2.toString());
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const checkResult = () => {
    var userInputval = parseInt(
      userInput.toString().split("").reverse().join("")
    );
    if (userInput == "" || userInput == NaN) {
      setResult("Please enter a number.");
    } else if (userInputval == parseInt(number1) + parseInt(number2)) {
      setResult("Congratulations! Your Answer is correct.");
      setUserInput("");
      setTimeout(function () {
        window.location.reload(false);
      }, 3000);
    } else {
      setResult(
        `Sorry, the numbers do not match. Entered number is ${userInputval}, should be ${
          parseInt(number1) + parseInt(number2)
        }`
      );
    }
  };

  return (
    <div id="RandomNumberGame">
      <h2>Random Number Game</h2>
      <p>Match the numbers below:</p>
      <p>{" " + number1}</p>
      <p>{` + ${number2}`}</p>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        style={{ direction: "rtl", unicodeBidi: "bidi-override" }}
      />
      <button onClick={checkResult}>Check</button>
      <p>{result}</p>
    </div>
  );
};

export default RandomNumberGame;
