import React from "react";
import { Link } from "react-router-dom";
import uff from "../../utils/uff.png";
export const Home = () => {
  return (
    <>
      <div>
        <label className="label-search" style={{ color: "#1876d0" }}>
          Calculador de Diagramas Fasoriais de Máquinas Síncronas
        </label>
        <label className="sub-footer">
          Departamento de Engenharia Elétrica (TEE)
        </label>

        <label className="sub-footer">
          Universidade Federal Fluminense (UFF)
        </label>

        <div className="uff-logo">
          <img src={uff} width="280px" alt="UFF" />
        </div>
        <div className="buttons-container">
          <Link to="/motor">
            <button className="td-button">Motor</button>
          </Link>
          <Link to="/connected_generator">
            <button className="td-button">Gerador Conectado</button>
          </Link>
          <Link to="/isolated_generator">
            <button className="td-button">Gerador Isolado</button>
          </Link>
        </div>
        <div className="footer">
          Desenvolvido como trabalho de conclusão do curso de Engenharia
          Elétrica por Guilherme Alves Pimenta.
        </div>
        <div className="sub-footer">
          Orientado pelo professor Flávio G. R. Martins.
        </div>
        <div className="sub-footer">2021-2022</div>
        <div className="sub-footer">V 2.0</div>
      </div>
    </>
  );
};
