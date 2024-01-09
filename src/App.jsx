import { useState } from "react";
import "./App.css";


function App() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const reset = () => {
    setInput("");
    setResult(0);
  };
  const handleClick = (e) => {
    setInput(input.concat(e.target.name));
  };
  const equal = () => {
    setResult(eval(input));
  };
  const del = () =>{
    setInput(input.slice(0,-1))
  } 

  return (
    <>
      <div className="input">
        <input type="text" placeholder="" value={input}/>
      </div>
      <h2>Result: {result}</h2>

      <div className="click">
        <div>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="/" onClick={handleClick}>/</button>
        </div>
        <div>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="*" onClick={handleClick}>*</button>
        </div>
        <div>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="-" onClick={handleClick}>-</button>
        </div>
        <div>
          <button name="." onClick={handleClick}>.</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="equal" onClick={equal}>=</button>
          <button name="+" onClick={handleClick}>+</button>
        </div>
        <div>
          <button onClick={reset}>Reset</button>
          <button name="delete" onClick={del}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default App;
