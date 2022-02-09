import React from "react";

const Line = ({ coords, machineType }) => {
  if (machineType === "isolated_generator") {
    return null;
  }

  const initial_x = 10;
  const initial_y = 50;

  let arrowHeadIncrement = 0;

  if (machineType === "motor") {
    arrowHeadIncrement = 1;
  } else {
    arrowHeadIncrement = -1;
  }
  return (
    <line
      x1={initial_x}
      x2={initial_x + 70}
      y1={initial_y - coords.Ea[1] + arrowHeadIncrement}
      y2={initial_y - coords.Ea[1] + arrowHeadIncrement}
      stroke="gray"
      stroke-dasharray="1"
      strokeWidth="0.1"
    />
  );
};

export default Line;
