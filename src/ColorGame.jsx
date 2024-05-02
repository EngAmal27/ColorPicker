import { useState } from "react";

function ColorGame() {
  const [color, setColor] = useState("#ffffff");

  const handelColor = (event) => {
    setColor(event.target.value);
  };
  return (
    <div className="container-color">
      <h1 className="color-picker">Color Picker</h1>
      <div style={{ backgroundColor: color }} className="color">
        <p  >Color: {color}</p>
      </div>
      <label> select the color : {color}</label>
      <input type="color" value={color} onChange={handelColor} />
    </div>
  );
}

export default ColorGame;
