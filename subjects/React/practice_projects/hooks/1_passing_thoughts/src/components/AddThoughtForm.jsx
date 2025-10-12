import { useState } from "react";
import { generateExpiration, generateId } from "./utilities/helpers";

function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(text.length < 1){
      return
    }

    const newThought = {
      id: generateId(),
      text: text,
      expiresIn: generateExpiration(),
    };

    props.addThought(newThought);

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button>Save</button>
    </form>
  );
}

export default AddThoughtForm;
