import { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("black");

  const changeColorRgb = () => {
    setColor(getRandomColor());
  };

  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  }

  return (
    <>
      <button onClick={changeColorRgb}>Change Color</button>

      <p style={{ color }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, id?
      </p>
    </>
  );
}

export default ChangeColor;
