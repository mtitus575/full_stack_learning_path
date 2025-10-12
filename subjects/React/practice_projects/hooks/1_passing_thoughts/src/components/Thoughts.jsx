import { useEffect } from "react";

function Thoughts(props) {
  const { thoughts, removeThought } = props;

  return (
    <ul>
      {thoughts.map((thought) => {
        return (
          <li key={thought.id}>
            <p>{thought.text}</p>
            <button onClick={() => removeThought(thought.id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Thoughts;
