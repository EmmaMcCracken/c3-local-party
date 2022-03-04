import { useState } from "react";

interface formProps {
  handleOnSubmit: (args: any) => void;
}

export default function Form({ handleOnSubmit }: formProps): JSX.Element {
  const [userInput, setUserInput] = useState("");
  return (
    <form onSubmit={() => handleOnSubmit(userInput)}>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      ></input>
      <button>Enter</button>
    </form>
  );
}
