import React, { useState } from "react";

import "./styles.scss";

ColorBox.propTypes = {};
function getRandomColor() {
  const COLOR_LISTS = ["deeppink", "black", "green", "yellow"];
  const randomIndex = Math.trunc(Math.random() * 4);
  return COLOR_LISTS[randomIndex];
}
function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink";
    console.log(initColor);
    return initColor;
  });
  const handleClick = () => {
    // get random color ->  setColor
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box-color", newColor);
  };

  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: color }}
      className="color-box"
    ></div>
  );
}

export default ColorBox;
