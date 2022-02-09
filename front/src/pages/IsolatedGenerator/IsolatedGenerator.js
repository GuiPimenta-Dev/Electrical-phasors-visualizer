import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Header from "../../components/Header/Header";
import Phasors from "../../components/Phasors/Phasors";
import { AppContext } from "../../context/AppState";

export const IsolatedGenerator = () => {
  const appContext = useContext(AppContext);
  const {
    loading,
    putIsolatedGeneratorLoad,
    putIsolatedGeneratorVoltage,
    putIsolatedGeneratorPowerFactor,
    setIsolatedGeneratorParams,
    isolatedGeneratorSettingsData,
    isolatedGeneratorLoadData,
    isolatedGeneratorVoltageData,
    isolatedGeneratorPowerFactorData,
    isolatedGeneratorParams,
  } = appContext;

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <ClipLoader size={150} color={"#0B66A4"} loading={loading} />
        </div>
      ) : (
        <>
          <Header label="GERADOR ISOLADO" />
          <Phasors
            putMachineLoad={putIsolatedGeneratorLoad}
            putMachinePowerFactor={putIsolatedGeneratorPowerFactor}
            putMachineVoltage={putIsolatedGeneratorVoltage}
            setMachineParams={setIsolatedGeneratorParams}
            settingsData={isolatedGeneratorSettingsData}
            loadData={isolatedGeneratorLoadData}
            voltageData={isolatedGeneratorVoltageData}
            powerFactorData={isolatedGeneratorPowerFactorData}
            machineParams={isolatedGeneratorParams}
            machineType="isolated_generator"
          />
        </>
      )}
    </>
  );
};
