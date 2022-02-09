import React from "react";

const Circle = ({ radius }) => {
  const initial_x = 10;
  const initial_y = 50;
  return (
    <circle
      cx={initial_x}
      cy={initial_y}
      r={radius + 2}
      stroke="gray"
      stroke-width="0.1"
      fill="white"
      stroke-dasharray="1"
    />
  );
  // const getDist = (x1, x2, y1, y2) => {
  //   var a = x1 - x2;
  //   var b = y1 - y2;
  //   return Math.sqrt(a * a + b * b);
  // };

  {
    /* <path
        d={`M 55 51.76 a ${getDist(
          initial_x,
          initial_x + coords.Ea[0],
          initial_y,
          initial_y - coords.Ea[1]
        )} ${getDist(
          initial_x,
          initial_x + coords.Ea[0],
          initial_y,
          initial_y - coords.Ea[1]
        )} 0 0 1 -55 55`}
        stroke="grey"
        stroke-width="2"
        fill="none"
      /> */
  }
};

export default Circle;
