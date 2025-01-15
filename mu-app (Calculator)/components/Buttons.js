import React from "react";
import "./Buttons.css";

const Buttons = ({ onClick, onClear, onBackspace, onCalculate }) => {
  return (
    <div className="buttons">
      <button onClick={onClear} className="clear">C</button>
      <button onClick={onBackspace}>&larr;</button>
      <button onClick={() => onClick("/")}>&divide;</button>
      <button onClick={() => onClick("*")}>&times;</button>

      <button onClick={() => onClick("7")}>7</button>
      <button onClick={() => onClick("8")}>8</button>
      <button onClick={() => onClick("9")}>9</button>
      <button onClick={() => onClick("-")}>&minus;</button>

      <button onClick={() => onClick("4")}>4</button>
      <button onClick={() => onClick("5")}>5</button>
      <button onClick={() => onClick("6")}>6</button>
      <button onClick={() => onClick("+")}>+</button>

      <button onClick={() => onClick("1")}>1</button>
      <button onClick={() => onClick("2")}>2</button>
      <button onClick={() => onClick("3")}>3</button>
      <button onClick={() => onClick(".")}>.</button>
      <button onClick={onCalculate} className="equals">=</button>

      <button onClick={() => onClick("0")} className="zero">0</button>
    </div>
  );
};

export default Buttons;
