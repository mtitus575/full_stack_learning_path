import { useState } from "react";
import { generateExpiration, generateId } from "./utilities/helpers";

function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim()) {
      const newThought = {
        id: generateId(),
        text: text.trim(),
        expiresIn: generateExpiration(),
      };

      props.addThought(newThought);
      setText(" ");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button disabled={!text.trim()}>Save</button>
    </form>
  );
}

export default AddThoughtForm;
