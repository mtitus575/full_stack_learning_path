import { useState } from "react";

function AddThoughtForm() {
  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newThought = {
      id: generateId(),
      text: "I am working on React",
      isExpired: generateExpiration(),
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button>Save</button>
    </form>
  );
}

export default AddThoughtForm;
