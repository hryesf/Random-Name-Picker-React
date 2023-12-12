import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [name, setName] = useState("");
  const [namesList, setNamesList] = useState([]);
  const [randomName, setRandomName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleAddName = () => {
    setNamesList([...namesList, name]);
    setName("");
  };

  const handlePickRandomName = () => {
    const randomIndex = Math.floor(Math.random() * namesList.length);
    setRandomName(namesList[randomIndex]);
  };

  return (
    <div>
      <h1>Random Name Picker</h1>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter a name"
      />
      <p></p>
      <div><button onClick={handleAddName}>Add Name</button></div>
      <p></p>
      <div><button onClick={handlePickRandomName}>Pick Random Name</button></div>
      <div>
        <p>Entered Names: {namesList.join(", ")}</p>
      </div>
      {randomName && <h2>Randomly Picked Name: {randomName} 🎉</h2>}
    </div>
  );
}

export default App
