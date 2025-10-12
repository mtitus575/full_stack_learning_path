import { useState } from "react";
import "./App.css";
import { generateExpiration, generateId } from "./components/utilities/helpers";
import AddThoughtForm from "./components/AddThoughtForm";
import Thoughts from "./components/Thoughts";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'First thought',
      expiresIn: generateExpiration()
    }
  ]);

  const addThought = (thoughtToAdd) => {
    setThoughts((prevThoughts) => {
      return [...prevThoughts, thoughtToAdd];
    });
  };

  const removeThought = (idToRemove) => {
    setThoughts((prevThoughts) => {
      return prevThoughts.filter((thought) => {
        return thought.id !== idToRemove;
      });
    });
  };

  //variables to hold placeholder text or thoughts:
  const noThought = (
    <div>
      <p>No thoughts yet</p>
    </div>
  );

  const currentThought = (
    <div>
        <Thoughts thoughts={thoughts} removeThought={removeThought} />
      </div>
  )

  return (
    <>
      <AddThoughtForm thoughts={thoughts} addThought={addThought} />
      {thoughts.length === 0 ? noThought : currentThought}
    </>
  );
}

export default App;
