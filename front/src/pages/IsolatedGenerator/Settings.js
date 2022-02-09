import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { GeneratorSettings } from "../../components/GeneratorSettings/GeneratorSettings";
import { AppContext } from "../../context/AppState";

export const IsolatedGeneratorSettings = () => {
  const appContext = useContext(AppContext);
  const {
    isolatedGeneratorSettings,
    setIsolatedGeneratorSettings,
    callPostIsolatedGenerator,
  } = appContext;

  return (
    <>
      <Header label="PARÂMETROS DO GERADOR ISOLADO" />
      <GeneratorSettings
        generatorSettings={isolatedGeneratorSettings}
        setGeneratorSettings={setIsolatedGeneratorSettings}
        callPostGenerator={callPostIsolatedGenerator}
        path="isolated_generator"
      />
    </>
  );
};
