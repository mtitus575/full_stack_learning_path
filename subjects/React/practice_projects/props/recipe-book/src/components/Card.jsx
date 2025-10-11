import Body from "./Body";
import ImageContainer from "./ImageContainer";

function Card(props) {

    return (
        <div className="card">
            <section>
                <Body   title={props.recipeObj.title} 
                        ingredintArr={props.recipeObj.ingredients}
                        instructArr={props.recipeObj.instructions} />
            </section>
            <section className="imgContainer">
                <ImageContainer description={props.recipeObj.description}
                                image={props.recipeObj.image} />
            </section>
        </div>
    );
};

export default Card;