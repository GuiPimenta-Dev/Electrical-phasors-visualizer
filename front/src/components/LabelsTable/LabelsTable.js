import React from "react";
import "./LabelsTable.css";

const LabelsTable = (props) => {
  return (
    <div className="d-flex flex-column">
      <div className="title">{props.title}</div>
      <div
        className="d-flex phasor-label justify-content-between fs-sm label-font"
        style={{ color: "green", fontWeight: "bold" }}
      >
        <div className="">Ea</div>
        <div className="">{props.data.Ea}</div>
      </div>

      <div
        className="d-flex phasor-label justify-content-between fs-sm"
        style={{ color: "tomato", fontWeight: "bold" }}
      >
        <div className="">Vt</div>
        <div className="">{props.data.Vt}</div>
      </div>

      <div
        className="d-flex phasor-label justify-content-between fs-sm "
        style={{ fontWeight: "bold" }}
      >
        <div className="">RaIa</div>
        <div className="">{props.data.RaIa}</div>
      </div>
      <div
        className="d-flex phasor-label justify-content-between fs-sm "
        style={{ color: "pink", fontWeight: "bold" }}
      >
        <div className="">jXsIa</div>
        <div className="">{props.data.jXsIa}</div>
      </div>
      <div
        className="d-flex phasor-label justify-content-between fs-sm"
        style={{ color: "#1876D0", fontWeight: "bold" }}
      >
        <div className="">Ia</div>
        <div className="">{props.data.Ia}</div>
      </div>
    </div>
  );
};

export default LabelsTable;
