function Thoughts(props) {
  const { thoughts, removeThought } = props;

  return (
    <ul>
      {thoughts.map((thought) => {
        function handleDeleteClick() {
          removeThought(thought.id);
        }

        return (
          <li key={thought.id}>
            <p>{thought.text}</p>
            <button onClick={handleDeleteClick}>x</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Thoughts;
