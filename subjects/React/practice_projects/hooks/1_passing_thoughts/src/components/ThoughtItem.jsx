import { useEffect } from "react";

function ThoughtItem(props) {
  const { thought, removeThought } = props;

  useEffect(() => {
    const removeTime = thought.expiresIn - Date.now();

    if (removeTime > 0) {
      const removalTimer = setTimeout(() => {
        removeThought(thought.id);
      }, removeTime);
      
      return () => {
        clearTimeout(removalTimer);
      }
    };
  }, [thought.id, thought.expiresIn, removeThought]);

  return (
    <li>
      <p>{thought.text}</p>
      <button onClick={() => removeThought(props.thought.id)}>x</button>
    </li>
  );
}

export default ThoughtItem;
