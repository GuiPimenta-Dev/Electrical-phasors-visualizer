import React from "react";

const LineWithArrow = ({ coords }) => {
  const initial_x = 10;
  const initial_y = 50;
  console.log(coords);
  return (
    <>
      <line
        x1={initial_x}
        x2={initial_x + coords.Vt[0]}
        y1={initial_y}
        y2={initial_y + coords.Vt[1]}
        stroke="gray"
        stroke-dasharray="3"
        strokeWidth="0.5"
      />
      <line
        x1={initial_x}
        x2={initial_x + coords.Ea[0] + 1}
        y1={initial_y}
        y2={initial_y - coords.Ea[1]}
        stroke="gray"
        stroke-dasharray="3"
        strokeWidth="0.5"
      />

      <line
        x1={initial_x}
        x2={initial_x + coords.Ia[0]}
        y1={initial_y}
        y2={initial_y - coords.Ia[1]}
        stroke="gray"
        stroke-dasharray="3"
        strokeWidth="0.5"
      />

      <line
        x1={initial_x + coords.Ea[0] + 1}
        x2={initial_x + coords.Vt[0]}
        y1={initial_y - coords.Ea[1]}
        y2={initial_y + coords.Vt[1]}
        stroke="gray"
        stroke-dasharray="3"
        strokeWidth="0.5"
      />
    </>
  );
};

export default LineWithArrow;
