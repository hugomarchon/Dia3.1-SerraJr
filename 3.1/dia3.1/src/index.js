import React from "react";
import reactDOM from "react-dom";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Card from "./componentes/Card";
import Ocultacard from "./componentes/OcultaCard";

reactDOM.render(
  <div>
    <Cabecalho></Cabecalho>
    <Ocultacard></Ocultacard>
    <Rodape></Rodape>
  </div>,

  document.getElementById("root")
);
