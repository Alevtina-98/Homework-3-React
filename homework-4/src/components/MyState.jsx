import { useState } from "react";

function ReturnNumber() {
  const [number, setNumber] = useState(0);

  const getRandomNumber = () => {
    setNumber(generateRandomNumber());
  };

  function generateRandomNumber() {
    return Math.floor(Math.random() * 101);
  }

  return (
    <>
      <button onClick={getRandomNumber}>Generate Number</button>
      <p>{number}</p>
    </>
  );
}

export default ReturnNumber;
