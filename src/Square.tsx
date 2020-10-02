import React, { FC, useState, MouseEvent, useEffect } from "react";
interface Props {
  info: object;
}

const Square: React.FC<Props> = (props) => {
  let [square, setSquare] = useState();

  let start = (event: MouseEvent): any => {
    let central = parseFloat(square.width) / 2;
    setSquare({
      ...square,
      left: event.clientX - central + "px",
      top: event.clientY - central + "px",
    });
  };

  useEffect(() => setSquare(props.info), [props.info]);
  return (
    <div id="ball" style={square} onMouseMove={start}>
      {" "}
    </div>
  );
};

export default Square;
