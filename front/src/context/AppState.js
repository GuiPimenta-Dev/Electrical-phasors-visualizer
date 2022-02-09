import React, { useState, createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppState = (props) => {
  // const apiUrl = "http://localhost:5000/api/v1";
  const apiUrl = "https://maq-sinc-uff.herokuapp.com/api/v1";
  // const apiUrl = "https://guiiialves.pythonanywhere.com//api/v1";

  const [loading, setLoading] = useState(true);

  const [motorSettingsData, setMotorSettingsData] = useState({});
  const [motorLoadData, setMotorLoadData] = useState({});
  const [motorVoltageData, setMotorVoltageData] = useState({});
  const [motorPowerFactorData, setMotorPowerFactorData] = useState({});

  const [isolatedGeneratorSettingsData, setIsolatedGeneratorSettingsData] =
    useState({});
  const [isolatedGeneratorLoadData, setIsolatedGeneratorLoadData] = useState(
    {}
  );
  const [isolatedGeneratorVoltageData, setIsolatedGeneratorVoltageData] =
    useState({});
  const [
    isolatedGeneratorPowerFactorData,
    setIsolatedGeneratorPowerFactorData,
  ] = useState({});

  const [connectedGeneratorSettingsData, setConnectedGeneratorSettingsData] =
    useState({});
  const [connectedGeneratorLoadData, setConnectedGeneratorLoadData] = useState(
    {}
  );
  const [connectedGeneratorVoltageData, setConnectedGeneratorVoltageData] =
    useState({});
  const [
    connectedGeneratorPowerFactorData,
    setConnectedGeneratorPowerFactorData,
  ] = useState({});

  const [motorSettings, setMotorSettings] = useState({
    VtN: 308,
    SN: 45,
    FpN: 0.8,
    Vt: 208,
    load: 15,
    Fp: 0.8,
    lead_lag: "lead",
    Xs: 2.5,
    Ra: 0,
    losses: 2.5,
  });

  const [isolatedGeneratorSettings, setIsolatedGeneratorSettings] = useState({
    VtN: 600,
    Vt: 480,
    Il: 120,
    Fp: 0.8,
    lead_lag: "lag",
    delta_star: "delta",
    Xs: 2.5,
    Ra: 0.1,
    losses: 70,
  });

  const [connectedGeneratorSettings, setConnectedGeneratorSettings] = useState({
    VtN: 600,
    Vt: 480,
    Il: 120,
    Fp: 0.8,
    lead_lag: "lag",
    delta_star: "delta",
    Xs: 2.5,
    Ra: 0.1,
    losses: 70,
  });

  const [motorParams, setMotorParams] = useState({});

  const [isolatedGeneratorParams, setIsolatedGeneratorParams] = useState({});

  const [connectedGeneratorParams, setConnectedGeneratorParams] = useState({});

  /* MOTOR */
  async function callPostMotor() {
    setLoading(true);
    const results = await postMotor();
    setMotorParams({
      load: results.data.sliders.load.value,
      voltage: results.data.sliders.voltage.value,
      power_factor: results.data.sliders.power_factor.value,
    });
    setMotorSettingsData(results.data);
    setMotorLoadData(results.data);
    setMotorVoltageData(results.data);
    setMotorPowerFactorData(results.data);
    setLoading(false);
  }

  const postMotor = async () => {
    return await axios({
      method: "post",
      url: `${apiUrl}/motor`,
      data: motorSettings,
      // data: {},
      headers: { "Content-Type": "application/json" },
    });
  };

  const putMotorLoad = async () => {
    let result = await axios({
      method: "put",
      url: `${apiUrl}/motor/load`,
      data: { load: motorParams.load },
      headers: { "Content-Type": "application/json" },
    });
    setMotorLoadData(result.data);
  };

  const putMotorVoltage = async () => {
    let result = await axios({
      method: "put",
      url: `${apiUrl}/motor/voltage`,
      data: { Ea: motorParams.voltage },
      headers: { "Content-Type": "application/json" },
    });
    setMotorVoltageData(result.data);
  };

  const putMotorPowerFactor = async () => {
    let result = await axios({
      method: "put",
      url: `${apiUrl}/motor/power_factor`,
      data: { Fp: motorParams.power_factor },
      headers: { "Content-Type": "application/json" },
    });
    setMotorPowerFactorData(result.data);
  };
  /* Isolated Generator */
  async function callPostIsolatedGenerator() {
    setLoading(true);

    const results = await postIsolatedGenerator();
    setIsolatedGeneratorParams({
      load: results.data.sliders.load.value,
      voltage: results.data.sliders.voltage.value,
      power_factor: results.data.sliders.power_factor.value,
    });
    setIsolatedGeneratorSettingsData(results.data);
    setIsolatedGeneratorLoadData(results.data);
    setIsolatedGeneratorVoltageData(results.data);
    setIsolatedGeneratorPowerFactorData(results.data);
    setLoading(false);
  }

  const postIsolatedGenerator = async () => {
    return await axios({
      method: "post",
      url: `${apiUrl}/isolated_generator`,
      data: isolatedGeneratorSettings,
      // data: {},
      headers: { "Content-Type": "application/json" },
    });
  };

  const putIsolatedGeneratorLoad = async () => {
    let result = await axios({
      method: "put",
      url: `${apiUrl}/isolated_generator/load`,
      data: { load: isolatedGeneratorParams.load },
      headers: { "Content-Type": "application/json" },
    });
    setIsolatedGeneratorLoadData(result.data);
  };

  const putIsolatedGeneratorVoltage = async () => {
    let result = await axios({
      method: "put",
      url: `${apiUrl}/isolated_generator/voltage`,
      data: { Ea: isolatedGeneratorParams.voltage },
      headers: { "Content-Type": "application/json" },
    });
    setIsolatedGeneratorVoltageData(result.data);
  };

  const putIsolatedGeneratorPowerFactor = async () => {
    let result = await axios({
      method: "put",
      url: `${apiUrl}/isolated_generator/power_factor`,
      data: { Fp: isolatedGeneratorParams.power_factor },
      headers: { "Content-Type": "application/json" },
    });
    setIsolatedGeneratorPowerFactorData(result.data);
  };

  /* Connected Generator */
  async function callPostConnectedGenerator() {
    setLoading(true);
    const results = await postConnectedGenerator();
    setConnectedGeneratorParams({
      load: results.data.sliders.load.value,
      voltage: results.data.sliders.voltage.value,
      power_factor: results.data.sliders.power_factor.value,
    });
    setConnectedGeneratorSettingsData(results.data);
    setConnectedGeneratorLoadData(results.data);
    setConnectedGeneratorVoltageData(results.data);
    setConnectedGeneratorPowerFactorData(results.data);
    setLoading(false);
  }

  const postConnectedGenerator = async () => {
    return await axios({
      method: "post",
      url: `${apiUrl}/connected_generator`,
      data: connectedGeneratorSettings,
      // data: {},
      headers: { "Content-Type": "application/json" },
    });
  };

  const putConnectedGeneratorLoad = async () => {
    let result = await axios({
      method: "put",
      url: `${apiUrl}/connected_generator/load`,
      data: { load: connectedGeneratorParams.load },
      headers: { "Content-Type": "application/json" },
    });
    setConnectedGeneratorLoadData(result.data);
  };

  const putConnectedGeneratorVoltage = async () => {
    let result = await axios({
      method: "put",
      url: `${apiUrl}/connected_generator/voltage`,
      data: { Ea: connectedGeneratorParams.voltage },
      headers: { "Content-Type": "application/json" },
    });
    setConnectedGeneratorVoltageData(result.data);
  };

  const putConnectedGeneratorPowerFactor = async () => {
    let result = await axios({
      method: "put",
      url: `${apiUrl}/connected_generator/power_factor`,
      data: { Fp: connectedGeneratorParams.power_factor },
      headers: { "Content-Type": "application/json" },
    });
    setConnectedGeneratorPowerFactorData(result.data);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        callPostMotor,
        callPostIsolatedGenerator,
        callPostConnectedGenerator,
        motorSettings,
        isolatedGeneratorSettings,
        connectedGeneratorSettings,
        setMotorSettings,
        setIsolatedGeneratorSettings,
        setConnectedGeneratorSettings,
        motorParams,
        isolatedGeneratorParams,
        connectedGeneratorParams,
        motorLoadData,
        isolatedGeneratorLoadData,
        connectedGeneratorLoadData,
        motorVoltageData,
        isolatedGeneratorVoltageData,
        connectedGeneratorVoltageData,
        motorPowerFactorData,
        isolatedGeneratorPowerFactorData,
        connectedGeneratorPowerFactorData,
        setMotorParams,
        setIsolatedGeneratorParams,
        setConnectedGeneratorParams,
        putMotorLoad,
        putIsolatedGeneratorLoad,
        putConnectedGeneratorLoad,
        putMotorVoltage,
        putIsolatedGeneratorVoltage,
        putConnectedGeneratorVoltage,
        putMotorPowerFactor,
        putIsolatedGeneratorPowerFactor,
        putConnectedGeneratorPowerFactor,
        motorSettingsData,
        isolatedGeneratorSettingsData,
        connectedGeneratorSettingsData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
