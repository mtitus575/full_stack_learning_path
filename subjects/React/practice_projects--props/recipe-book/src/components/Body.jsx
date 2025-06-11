

function Body(props) {
    //mapping over the array of ingredients (ingredintArr).
    //It extracts each ingredient into a list item
    const ingredientItems = props.ingredintArr.map(item => {
        return <li>{item}</li>
    });
    
    //mapping over the array of instructions (individualInstruction).
    //It extracts each instruction into a list item
    const individualInstruction = props.instructArr.map((instruction, index) => {
        return <li key={index}>{instruction}</li>
    });
    console.log(individualInstruction)
    
    return (
        <>
            <h1>{props.title}</h1>
            <section>
                <h4>Ingredients</h4>
                <ul>
                    {ingredientItems}
                </ul>
            </section>
            <section>
                <h3>Instructions</h3>
                <ol>
                    {individualInstruction}
                </ol>
            </section>
        </>
    );
};

export default Body;