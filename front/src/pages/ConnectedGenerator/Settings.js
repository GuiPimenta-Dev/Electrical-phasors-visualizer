import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { GeneratorSettings } from "../../components/GeneratorSettings/GeneratorSettings";
import { AppContext } from "../../context/AppState";

export const ConnectedGeneratorSettings = () => {
  const appContext = useContext(AppContext);
  const {
    connectedGeneratorSettings,
    setConnectedGeneratorSettings,
    callPostConnectedGenerator,
  } = appContext;

  return (
    <>
      <Header label={"PARÂMETROS DO GERADOR CONECTADO"} />
      <GeneratorSettings
        generatorSettings={connectedGeneratorSettings}
        setGeneratorSettings={setConnectedGeneratorSettings}
        callPostGenerator={callPostConnectedGenerator}
        path="connected_generator"
      />
    </>
  );
};
