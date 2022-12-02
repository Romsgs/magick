import React from "react";
import './cardJogador.css'
import LifeCounter from "../contador/contador";
import DisplayInfo from "../DisplayInfo/DisplayInfo"
// interface ICardJogadorProps {
//   vidaAtual: Number;
//   dano?: Number;
//   cura?: Number;
  
// }
function CardJogador(props) {
  console.log('CardJogador props ', props);
  return (
    <div className="CardJogadorContainer">
      <DisplayInfo id={props.id}/>
      <LifeCounter />
     
    </div>
  );
}

export default CardJogador