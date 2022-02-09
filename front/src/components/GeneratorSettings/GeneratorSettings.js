import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FloatingLabel from "../../components/FloatingLabel/FloatingLabel";

export const GeneratorSettings = ({
  generatorSettings,
  setGeneratorSettings,
  callPostGenerator,
  path,
}) => {
  const handleInput = (input) => (e) => {
    const re = /^[0-9.\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setGeneratorSettings((obj) => ({ ...obj, [input]: e.target.value }));
    }
  };

  const handleFPInput = (input) => (e) => {
    const re = /^[0-9.\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      if (e.target.value >= 0 && e.target.value <= 1) {
        setGeneratorSettings((obj) => ({ ...obj, [input]: e.target.value }));
      }
    }
  };

  const onChangeValue = (event) => {
    setGeneratorSettings((obj) => ({ ...obj, lead_lag: event.target.value }));
  };

  const onChangeDeltaValue = (event) => {
    setGeneratorSettings((obj) => ({ ...obj, delta_star: event.target.value }));
  };

  return (
    <>
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
                  value={generatorSettings.VtN}
                  onChangeText={handleInput("VtN")}
                  isActive={generatorSettings.VtN ? true : false}
                />
              </div>

              <div class="col-md">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="star"
                    onChange={onChangeDeltaValue}
                    name="delta_star"
                    checked={generatorSettings.delta_star !== "delta"}
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault1"
                    style={{ color: "#000" }}
                  >
                    Estrela
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="delta"
                    onChange={onChangeDeltaValue}
                    name="delta_star"
                    checked={generatorSettings.delta_star === "delta"}
                  />
                  <label
                    class="form-check-label"
                    for="flexRadioDefault2"
                    style={{ color: "#000" }}
                  >
                    Delta
                  </label>
                </div>
              </div>
            </div>

            <Form.Label style={{ paddingTop: "20px" }}>
              Parâmetros do Gerador:
            </Form.Label>
            <div class="row g-2">
              <div class="col-md">
                <FloatingLabel
                  type="text"
                  name="Vt"
                  placeholder="Vt (V)"
                  value={generatorSettings.Vt}
                  onChangeText={handleInput("Vt")}
                  isActive={generatorSettings.Vt ? true : false}
                />
              </div>
              <div class="col-md">
                <FloatingLabel
                  type="text"
                  name="Il"
                  placeholder="Corrente de Linha (A)"
                  value={generatorSettings.Il}
                  onChangeText={handleInput("Il")}
                  isActive={generatorSettings.Il ? true : false}
                />
              </div>
              <div class="col-md">
                <FloatingLabel
                  type="number"
                  name="Fp"
                  placeholder="Fator de potência"
                  value={generatorSettings.Fp}
                  onChangeText={handleFPInput("Fp")}
                  isActive={generatorSettings.Fp ? true : false}
                />
              </div>
              <div class="col-md">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="lag"
                    onChange={onChangeValue}
                    name="lag"
                    checked={generatorSettings.lead_lag === "lag"}
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
                    name="lag"
                    checked={generatorSettings.lead_lag === "lead"}
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
                  value={generatorSettings.Xs}
                  onChangeText={handleInput("Xs")}
                  isActive={generatorSettings.Xs ? true : false}
                />
              </div>
              <div class="col-md">
                <FloatingLabel
                  type="text"
                  name="RA"
                  placeholder="Resistência de Armadura (Ω)"
                  value={generatorSettings.Ra}
                  onChangeText={handleInput("Ra")}
                  isActive={generatorSettings.Ra ? true : false}
                />
              </div>
              {/* <div class="col-md">
                <FloatingLabel
                  type="text"
                  name="losses"
                  placeholder="Perdas Totais (kW)"
                  value={generatorSettings.losses}
                  onChangeText={handleInput("losses")}
                  isActive={generatorSettings.losses ? true : false}
                />
              </div> */}
            </div>
          </Form.Group>
          <Link to={`/${path}/results`}>
            <Button
              variant="primary"
              style={{ width: "100%" }}
              onClick={callPostGenerator}
            >
              Enviar
            </Button>
          </Link>
        </Card>
      </div>
    </>
  );
};
