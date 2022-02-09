import React, { useContext, useEffect, useRef } from "react";
import Slider from "@material-ui/core/Slider";
import LabelsTable from "../LabelsTable/LabelsTable";
import LineWithArrow from "../LineWithArrow/LineWithArrow";
import LineWithoutArrow from "../LineWithoutArrow/LineWithoutArrow";
import Circle from "../Circle/Circle";
import Line from "../Line/Line";

import "./phasors.css";
const PhasorsMotor = ({
  putMachineLoad,
  putMachineVoltage,
  putMachinePowerFactor,
  setMachineParams,
  settingsData,
  loadData,
  voltageData,
  powerFactorData,
  machineParams,
  machineType,
}) => {
  const initial_x = 10;
  const initial_y = 50;

  useEffect(() => {
    putMachineLoad();
  }, [machineParams.load]);

  useEffect(() => {
    putMachineVoltage();
  }, [machineParams.voltage]);

  useEffect(() => {
    putMachinePowerFactor();
  }, [machineParams.power_factor]);

  const handleInput = (input) => (e, value) => {
    setMachineParams((obj) => ({ ...obj, [input]: value }));
  };

  return (
    <div className="quadrants">
      <div className="quadrant aqua pull-left">
        <div className="arrows-labels">
          <div className="arrows">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 100 100`}>
              <LineWithArrow
                id="line2"
                color="green"
                coords={{
                  x1: initial_x,
                  x2: initial_x + settingsData.coords.Ea[0],
                  y1: initial_y,
                  y2: initial_y - settingsData.coords.Ea[1],
                }}
              />

              <LineWithArrow
                id="line1"
                color="tomato"
                coords={{
                  x1: initial_x,
                  x2: initial_x + settingsData.coords.Vt[0],
                  y1: initial_y,
                  y2: initial_y + settingsData.coords.Vt[1],
                }}
              />
              {settingsData.coords.Ia[1] >= 0 ? (
                <LineWithArrow
                  id="line4"
                  color="pink"
                  coords={{
                    x1: initial_x + settingsData.coords.Ea[0],
                    x2: initial_x + settingsData.coords.Vt[0],
                    y1: initial_y - settingsData.coords.Ea[1],
                    y2: initial_y + settingsData.coords.Vt[1],
                  }}
                />
              ) : (
                <LineWithArrow
                  id="line4"
                  color="pink"
                  coords={{
                    x1: initial_x + settingsData.coords.Vt[0],
                    x2: initial_x + settingsData.coords.Ea[0],
                    y1: initial_y - settingsData.coords.Vt[1],
                    y2: initial_y - settingsData.coords.Ea[1],
                  }}
                />
              )}
              <LineWithArrow
                id="line3"
                color="#1876d0"
                coords={{
                  x1: initial_x,
                  x2: initial_x + settingsData.coords.Ia[0],
                  y1: initial_y,
                  y2: initial_y - settingsData.coords.Ia[1],
                }}
              />
            </svg>
          </div>

          <div className="labels">
            <LabelsTable data={settingsData.labels} title={"Caso Base"} />
          </div>
        </div>
      </div>

      <div className="quadrant #1876d0 pull-right">
        <div className="arrows-labels">
          <div className="arrows">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 100 100`}>
              <Circle radius={settingsData.coords.Ea[0]} />
              <LineWithoutArrow coords={settingsData.coords} />

              <LineWithArrow
                id="line2"
                color="green"
                coords={{
                  x1: initial_x,
                  x2: initial_x + loadData.coords.Ea[0],
                  y1: initial_y,
                  y2: initial_y - loadData.coords.Ea[1],
                }}
              />
              <LineWithArrow
                id="line1"
                color="tomato"
                coords={{
                  x1: initial_x,
                  x2: initial_x + loadData.coords.Vt[0],
                  y1: initial_y,
                  y2: initial_y + loadData.coords.Vt[1],
                }}
              />
              {loadData.coords.Ia[1] >= 0 ? (
                <LineWithArrow
                  id="line4"
                  color="pink"
                  coords={{
                    x1: initial_x + loadData.coords.Ea[0],
                    x2: initial_x + loadData.coords.Vt[0],
                    y1: initial_y - loadData.coords.Ea[1],
                    y2: initial_y + loadData.coords.Vt[1],
                  }}
                />
              ) : (
                <LineWithArrow
                  id="line4"
                  color="pink"
                  coords={{
                    x1: initial_x + loadData.coords.Vt[0],
                    x2: initial_x + loadData.coords.Ea[0],
                    y1: initial_y - loadData.coords.Vt[1],
                    y2: initial_y - loadData.coords.Ea[1],
                  }}
                />
              )}
              <LineWithArrow
                id="line3"
                color="#1876d0"
                coords={{
                  x1: initial_x,
                  x2: initial_x + loadData.coords.Ia[0],
                  y1: initial_y,
                  y2: initial_y - loadData.coords.Ia[1],
                }}
              />
            </svg>
          </div>

          <div className="labels">
            <LabelsTable data={loadData?.labels} title={"Variação de carga"} />
            <div className="slider" style={{ fontWeight: "bold" }}>
              Carga
              <Slider
                valueLabelDisplay="auto"
                onChangeCommitted={handleInput("load")}
                min={settingsData.sliders.load.min}
                max={settingsData.sliders.load.max}
                defaultValue={settingsData.sliders.load.value}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="quadrant green pull-left bottom">
        <div className="arrows-labels">
          <div className="arrows">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 100 100`}>
              <LineWithoutArrow coords={settingsData.coords} />
              <Line coords={settingsData.coords} machineType={machineType} />

              <LineWithArrow
                id="line2"
                color="green"
                coords={{
                  x1: initial_x,
                  x2: initial_x + voltageData.coords.Ea[0],
                  y1: initial_y,
                  y2: initial_y - voltageData.coords.Ea[1],
                }}
              />
              <LineWithArrow
                id="line1"
                color="tomato"
                coords={{
                  x1: initial_x,
                  x2: initial_x + voltageData.coords.Vt[0],
                  y1: initial_y,
                  y2: initial_y + voltageData.coords.Vt[1],
                }}
              />
              {voltageData.coords.Ia[1] >= 0 ? (
                <LineWithArrow
                  id="line4"
                  color="pink"
                  coords={{
                    x1: initial_x + voltageData.coords.Ea[0],
                    x2: initial_x + voltageData.coords.Vt[0],
                    y1: initial_y - voltageData.coords.Ea[1],
                    y2: initial_y + voltageData.coords.Vt[1],
                  }}
                />
              ) : (
                <LineWithArrow
                  id="line4"
                  color="pink"
                  coords={{
                    x1: initial_x + voltageData.coords.Vt[0],
                    x2: initial_x + voltageData.coords.Ea[0],
                    y1: initial_y - voltageData.coords.Vt[1],
                    y2: initial_y - voltageData.coords.Ea[1],
                  }}
                />
              )}
              <LineWithArrow
                id="line3"
                color="#1876d0"
                coords={{
                  x1: initial_x,
                  x2: initial_x + voltageData.coords.Ia[0],
                  y1: initial_y,
                  y2: initial_y - voltageData.coords.Ia[1],
                }}
              />
            </svg>
          </div>

          <div className="labels">
            <LabelsTable data={voltageData?.labels} title={"Variação de Ea"} />
            <div className="slider" style={{ fontWeight: "bold" }}>
              Ea
              <Slider
                valueLabelDisplay="auto"
                onChangeCommitted={handleInput("voltage")}
                min={settingsData.sliders.voltage.min}
                max={settingsData.sliders.voltage.max}
                defaultValue={settingsData.sliders.voltage.value}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="quadrant tan pull-right bottom">
        <div className="arrows-labels">
          <div className="arrows">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 100 100`}>
              <LineWithoutArrow coords={settingsData.coords} />

              <LineWithArrow
                id="line2"
                color="green"
                coords={{
                  x1: initial_x,
                  x2: initial_x + powerFactorData.coords.Ea[0],
                  y1: initial_y,
                  y2: initial_y - powerFactorData.coords.Ea[1],
                }}
              />
              <LineWithArrow
                id="line1"
                color="tomato"
                coords={{
                  x1: initial_x,
                  x2: initial_x + powerFactorData.coords.Vt[0],
                  y1: initial_y,
                  y2: initial_y + powerFactorData.coords.Vt[1],
                }}
              />
              {powerFactorData.coords.Ia[1] >= 0 ? (
                <LineWithArrow
                  id="line4"
                  color="pink"
                  coords={{
                    x1: initial_x + powerFactorData.coords.Ea[0],
                    x2: initial_x + powerFactorData.coords.Vt[0],
                    y1: initial_y - powerFactorData.coords.Ea[1],
                    y2: initial_y + powerFactorData.coords.Vt[1],
                  }}
                />
              ) : (
                <LineWithArrow
                  id="line4"
                  color="pink"
                  coords={{
                    x1: initial_x + powerFactorData.coords.Vt[0],
                    x2: initial_x + powerFactorData.coords.Ea[0],
                    y1: initial_y - powerFactorData.coords.Vt[1],
                    y2: initial_y - powerFactorData.coords.Ea[1],
                  }}
                />
              )}
              <LineWithArrow
                id="line3"
                color="#1876d0"
                coords={{
                  x1: initial_x,
                  x2: initial_x + powerFactorData.coords.Ia[0],
                  y1: initial_y,
                  y2: initial_y - powerFactorData.coords.Ia[1],
                }}
              />
            </svg>
          </div>

          <div className="labels">
            <LabelsTable
              data={powerFactorData?.labels}
              title={"Variação de Fator de potência"}
            />
            <div className="slider" style={{ fontWeight: "bold" }}>
              Fator de potência
              <Slider
                valueLabelDisplay="auto"
                onChangeCommitted={handleInput("power_factor")}
                step={0.05}
                min={settingsData.sliders.power_factor.min}
                max={settingsData.sliders.power_factor.max}
                defaultValue={settingsData.sliders.power_factor.value}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhasorsMotor;
