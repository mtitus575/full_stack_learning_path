

function Thoughts(props){
    const {thoughts, setThoughts} = props

    return (
        <ul>
            {thoughts.map(thought => {
                 return <li key={thought.id}>{thought.text}</li>
            })}
        </ul>
    );
};

export default Thoughts;