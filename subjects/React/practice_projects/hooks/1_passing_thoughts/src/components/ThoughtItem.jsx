import { useEffect } from "react";
const DEBUG = false;
function debug(consoleMessage){
  return
}

function ThoughtItem(props) {
  const { thought, removeThought } = props;

  useEffect(() => {
    const removeTime = thought.expiresIn - Date.now();
    
    if (removeTime > 0) {
      const removalTimer = setTimeout(() => {
        removeThought(thought.id);
        console.log('Thought removed.')
      }, removeTime);
      
      return () => {
        clearTimeout(removalTimer);
      }
    };
  }, [thought.id, thought.expiresIn, removeThought]);

  return (
    <li className="list-item">
      <p>{thought.text}</p>
      <button 
      className="removeBtn"
      onClick={() => removeThought(props.thought.id)}
      >
        x
      </button>
    </li>
  );
}

export default ThoughtItem;
