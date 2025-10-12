

function Thoughts(props){
    const {thoughts, setThoughts} = props

    return (
        <ul>
            {thoughts.map(thought => {
                 return <li key={thought.id}>
                    <p>{thought.text}</p>
                    <button>x</button>
                 </li>
            })}
        </ul>
    );
};

export default Thoughts;