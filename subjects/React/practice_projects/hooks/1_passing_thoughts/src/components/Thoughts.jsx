import ThoughtItem from "./ThoughtItem";

function Thoughts(props) {
  const { thoughts, removeThought } = props;

  return (
    <ul className='list'>
      {thoughts.map((thought) => {
        return (
          <ThoughtItem 
            key={thought.id}
            thought={thought} 
            removeThought={removeThought}
          />
        );
      })}
    </ul>
  );
}

export default Thoughts;
