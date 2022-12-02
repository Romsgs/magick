import React, { useState } from "react";
import "./contador.css";

function LifeCounter() {
  let [vida, setVida] = useState(20);

  return (
    <div className="ContadorContainer">
      <button className="buttonVida" onClick={() => setVida(vida - 1)}>
        {" "}
        -{" "}
      </button>
      <div id='vida'> {vida}  </div>
      <button className="buttonVida" onClick={() => setVida(vida + 1)}>
        {" "}
        +{" "}
      </button>
      <button className="buttonVida" onClick={() => setVida(20)}>
        ⟲
      </button>
    </div>
  );
}

export default LifeCounter;
