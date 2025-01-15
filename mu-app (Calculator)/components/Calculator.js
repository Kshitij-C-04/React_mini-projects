import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      alert("Invalid expression");
      setInput("");
    }
  };

  return (
    <div className="calculator">
      <Display input={input} />
      <Buttons
        onClick={handleClick}
        onClear={handleClear}
        onBackspace={handleBackspace}
        onCalculate={handleCalculate}
      />
    </div>
  );
};

export default Calculator;
