import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "../../components/Header/Header";
import Phasors from "../../components/Phasors/Phasors";
import { AppContext } from "../../context/AppState";

export const ConnectedGenerator = () => {
  const appContext = useContext(AppContext);
  const {
    loading,
    putConnectedGeneratorLoad,
    putConnectedGeneratorVoltage,
    putConnectedGeneratorPowerFactor,
    setConnectedGeneratorParams,
    connectedGeneratorSettingsData,
    connectedGeneratorLoadData,
    connectedGeneratorVoltageData,
    connectedGeneratorPowerFactorData,
    connectedGeneratorParams,
  } = appContext;

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <ClipLoader size={150} color={"#0B66A4"} loading={loading} />
        </div>
      ) : (
        <>
          <Header label="GERADOR CONECTADO" />
          <Phasors
            putMachineLoad={putConnectedGeneratorLoad}
            putMachinePowerFactor={putConnectedGeneratorPowerFactor}
            putMachineVoltage={putConnectedGeneratorVoltage}
            setMachineParams={setConnectedGeneratorParams}
            settingsData={connectedGeneratorSettingsData}
            loadData={connectedGeneratorLoadData}
            voltageData={connectedGeneratorVoltageData}
            powerFactorData={connectedGeneratorPowerFactorData}
            machineParams={connectedGeneratorParams}
            machineType="connected_generator"
          />
        </>
      )}
    </>
  );
};
