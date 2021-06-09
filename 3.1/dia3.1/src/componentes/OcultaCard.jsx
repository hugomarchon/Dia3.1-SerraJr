import Card from "./Card";
import React, { useState } from "react";

function Ocultar() {
  const [card_state, setCard_state] = useState(true);
  if (card_state == true) {
    return (
      <div className="Container">
        <Card id="Card"></Card>
        <button className="Button" onClick={() => setCard_state(false)}>
          <b>Mostrar/Esconder Card</b>
        </button>
      </div>
    );
  } else {
    return (
      <div className="Container">
        <button className="Button" onClick={() => setCard_state(true)}>
          <b>Mostrar/Esconder Card</b>
        </button>
      </div>
    );
  }
}

export default Ocultar;
