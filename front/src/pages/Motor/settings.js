import React, { useContext } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FloatingLabel from "../../components/FloatingLabel/FloatingLabel";
import Header from "../../components/Header/Header";
import { AppContext } from "../../context/AppState";

export const MotorSettings = () => {
  const appContext = useContext(AppContext);
  const { motorSettings, setMotorSettings, callPostMotor } = appContext;

  const handleInput = (input) => (e) => {
    const re = /^[0-9.\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setMotorSettings((obj) => ({ ...obj, [input]: e.target.value }));
    }
  };

  const handleFPInput = (input) => (e) => {
    const re = /^[0-9.\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      if (e.target.value >= 0 && e.target.value <= 1) {
        setMotorSettings((obj) => ({ ...obj, [input]: e.target.value }));
      }
    }
  };

  const onChangeValue = (event) => {
    setMotorSettings((obj) => ({ ...obj, lead_lag: event.target.value }));
  };

  return (
    <>
      <Header label="PARÂMETROS DO MOTOR" />
      <div className="card-container">
        <Card className="p-3 mt-3 card ">
          <Form.Label>Parâmetros Nominais:</Form.Label>

          <Form.Group>
            <div class="row g-2">
              <div class="col-md">
                <FloatingLabel
                  type="text"
                  name="VtN"
                  placeholder="Vt Nominal (V)"
                  value={motorSettings.VtN}
                  onChangeText={handleInput("VtN")}
                  isActive={motorSettings.VtN ? true : false}
                />
              </div>
              <div class="col-md">
                <FloatingLabel
                  type="text"
                  name="SN"
                  placeholder="Carga Nominal (HP)"
                  value={motorSettings.SN}
                  onChangeText={handleInput("SN")}
                  isActive={motorSettings.SN ? true : false}
                />
              </div>
              <div class="col-md">
                <FloatingLabel
                  type="number"
                  max="1"
                  min="0"
                  name="FpN"
                  placeholder="Fator de Potência Nominal"
                  value={motorSettings.FpN}
                  onChangeText={handleFPInput("FpN")}
                  isActive={motorSettings.FpN ? true : false}
                />
              </div>
            </div>

            <Form.Label style={{ paddingTop: "20px" }}>
              Parâmetros do Motor:
            </Form.Label>
            <div class="row g-2">
              <div class="col-md">
                <FloatingLabel
                  type="text"
                  name="Vt"
                  placeholder="Vt (V)"
                  value={motorSettings.Vt}
                  onChangeText={handleInput("Vt")}
                  isActive={motorSettings.Vt ? true : false}
                />
              </div>
              <div class="col-md">
                <FloatingLabel
                  type="text"
                  name="load"
                  placeholder="Carga (HP)"
                  value={motorSettings.load}
                  onChangeText={handleInput("load")}
                  isActive={motorSettings.load ? true : false}
                />
              </div>
              <div class="col-md">
                <FloatingLabel
                  type="number"
                  name="Fp"
                  placeholder="Fator de potência"
                  value={motorSettings.Fp}
                  onChangeText={handleFPInput("Fp")}
                  isActive={motorSettings.Fp ? true : false}
                />
              </div>
              <div class="col-md">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="lag"
                    onChange={onChangeValue}
                    name="lead_lag"
                    checked={motorSettings.lead_lag === "lag"}
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ color: "#000" }}
                  >
                    Atrasado
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="lead"
                    onChange={onChangeValue}
                    name="lead_lag"
                    checked={motorSettings.lead_lag === "lead"}
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault2"
                    style={{ color: "#000" }}
                  >
                    Adiantado
                  </label>
                </div>
              </div>
            </div>
            <div class="row g-2" style={{ paddingTop: "20px" }}>
              <div class="col-md">
                <FloatingLabel
                  type="text"
                  name="XS"
                  placeholder="Reatância Síncrona (Ω)"
                  value={motorSettings.Xs}
                  onChangeText={handleInput("Xs")}
                  isActive={motorSettings.Xs ? true : false}
                />
              </div>
              <div class="col-md">
                <FloatingLabel
                  type="text"
                  name="RA"
                  placeholder="Resistência de Armadura (Ω)"
                  value={motorSettings.Ra}
                  onChangeText={handleInput("Ra")}
                  isActive={
                    motorSettings.Ra || motorSettings.Ra === 0 ? true : false
                  }
                />
              </div>
              <div class="col-md">
                <FloatingLabel
                  type="text"
                  name="losses"
                  placeholder="Perdas Totais (kW)"
                  value={motorSettings.losses}
                  onChangeText={handleInput("losses")}
                  isActive={motorSettings.losses ? true : false}
                />
              </div>
            </div>
          </Form.Group>
          <Link to="/motor/results">
            <Button
              variant="primary"
              style={{ width: "100%" }}
              onClick={callPostMotor}
            >
              Enviar
            </Button>
          </Link>
        </Card>
      </div>
    </>
  );
};
