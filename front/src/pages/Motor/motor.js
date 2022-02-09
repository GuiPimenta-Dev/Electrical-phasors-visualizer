import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "../../components/Header/Header";
import Phasors from "../../components/Phasors/Phasors";
import { AppContext } from "../../context/AppState";

export const Motor = () => {
  const appContext = useContext(AppContext);
  const {
    loading,
    putMotorLoad,
    putMotorVoltage,
    putMotorPowerFactor,
    setMotorParams,
    motorSettingsData,
    motorLoadData,
    motorVoltageData,
    motorPowerFactorData,
    motorParams,
  } = appContext;

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <ClipLoader size={150} color={"#0B66A4"} loading={loading} />
        </div>
      ) : (
        <>
          <Header label="MOTOR" />
          <Phasors
            putMachineLoad={putMotorLoad}
            putMachinePowerFactor={putMotorPowerFactor}
            putMachineVoltage={putMotorVoltage}
            setMachineParams={setMotorParams}
            settingsData={motorSettingsData}
            loadData={motorLoadData}
            voltageData={motorVoltageData}
            powerFactorData={motorPowerFactorData}
            machineParams={motorParams}
            machineType="motor"
          />
        </>
      )}
    </>
  );
};
