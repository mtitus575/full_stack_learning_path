import Header from "./Header";
import Body from "./Body";

const Card = (props) => {
    return (
        <div className="card">
            <Header title={props.movieObject.title} poster={props.movieObject.poster} />
            <Body rating={props.movieObject.rating} review={props.movieObject.review} />
        </div>
    );
};

export default Card;