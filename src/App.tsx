import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [initialPlayers, setInitialPlayers] = useState("");
  const handleAddUsers = (users: string) => setInitialPlayers(users);
  return (
    <div className="App">
      <header className="App-header">
        <h1>C3 Local Party</h1>
      </header>
      <div>
        <Form handleOnSubmit={(input) => handleAddUsers(input)} />
      </div>
      {`The initial players are ${initialPlayers}`}
    </div>
  );
}

export default App;
