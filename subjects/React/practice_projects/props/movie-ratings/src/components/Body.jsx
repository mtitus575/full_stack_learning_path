const Body = (props) => {
    return (
        <>
            <h3 className="rating text">{props.rating}</h3>
            <p className="review text">{props.review}</p>
        </>
    );
};

export default Body;