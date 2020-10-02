import React, { FC, MouseEvent, useState } from "react";
import Square from "./Square";
import "./App.css";

const App: React.FC = () => {
  let [info, setInfo] = useState({});

  let getRandom = (e: React.MouseEvent): any => {
    let locationX = Math.round(Math.random() * 1000);
    let locationY = Math.round(Math.random() * 500);
    let size = Math.round(Math.random() * 80) + 20 + "px";
    let background =
      "#" +
      (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
    setInfo({
      position: "fixed",
      top: locationY,
      left: locationX,
      background: background,
      height: size,
      width: size,
    });
  };

  return (
    <div className="App">
      <button className="start" onClick={getRandom}>
        Click me and i give you a square
      </button>
      <Square info={info} />
    </div>
  );
};

export default App;
