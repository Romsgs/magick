import React, { useState, useEffect } from "react";
import "./App.css";
import CardJogador from "./modules/cardJogador/cardJogador";

function App() {
  const [nameInput, setNameInput] = useState()
  const handleChange = event => {
    setNameInput(event.target.value);

    console.log('value is:', event.target.value);
  };
  const [playerList, setPlayerList] = React.useState([
    { id: 1, name: nameInput },
  ]);
  // const playerList = [{ id: 1, name: 'Random Player' }];
  let idCounter = 1;
  function AddPlayer(name = "new") {
    const playerToAdd = {
      id: idCounter,
      name: name,
    };
    // playerList.push(playerToAdd);
    setPlayerList([...playerList, playerToAdd]);
    idCounter++;
  }
  useEffect(() => {
    console.log("acionou useEffect");
    // AddPlayer('new')
  }, [playerList]);
  return (
    <div>
      <button onClick={() => {
        AddPlayer()
        console.log(playerList)
      }}>AddPlayer</button>
      <input id="AddPlayerNameInput"></input>
      {/* <form onSubmit={AddPlayer('newName')}>
      <input placeholder='type your name here'></input>
      <button type='submit'>
        Add Player
      </button>
      </form> */}
      <ul>
        {playerList.map((item, index) => (
          <li key={index}>
            <CardJogador id={item.name} />
          </li>
        ))}
      </ul>
      {/* <DisplayInfo /> */}
      {/* <LifeCounter /> */}
    </div>
  );
}

export default App;
