import { useState } from "react";
import "./App.css";
import MyState from "./components/MyState.jsx";
import StateColor from "./components/StateColor.jsx";

function App() {
  const [value, setValue] = useState([1, 2, 3]);

  const push = () => {
    const newValue = generateRandomNumber();
    console.log("Adding new value:", newValue);
    setValue((prev) => [...prev, newValue]);
  };

  function generateRandomNumber() {
    return Math.floor(Math.random() * 101);
  }

  return (
    <div className="container">
      <button onClick={push}>Add random number</button>
      <>
        {value.map((val, index) => (
          <p key={index}>{val}</p>
        ))}
      </>
      <MyState />
      <StateColor />
    </div>
  );
}

export default App;
