import React, { useEffect } from "react";
import "./App.css";
import Routes from "./routes";

const App = () => {
  useEffect(() => {
    document.title = "Máquinas Síncronas UFF";
  }, []);
  return <Routes />;
};

export default App;
