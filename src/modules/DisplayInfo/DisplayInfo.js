import React from "react";
import './displayInfo.css'

function DisplayInfo(props){

  return (
    <div className="DisplayInfoContainer">
      <div>Jogador: {props.id}</div>
    </div>
  )
}

export default DisplayInfo