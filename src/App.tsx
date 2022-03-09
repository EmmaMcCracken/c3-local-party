import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [initialPlayers, setInitialPlayers] = useState("");
  const handleAddUsers = (
    e: React.FormEvent<HTMLFormElement>,
    users: string
  ) => {
    e.preventDefault();
    setInitialPlayers(users);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>C3 Local Party</h1>
      </header>
      <div>
        {!initialPlayers && (
          <Form handleOnSubmit={(e, input) => handleAddUsers(e, input)} />
        )}
      </div>
      {`The initial players are ${initialPlayers}`}
    </div>
  );
}

export default App;
