//product description and price

const Body = props => {
 return (
    <>
        <h2 className="price">{props.price}</h2>
        <p className="description">{props.description}</p>
    </>
 );
};

export default Body;