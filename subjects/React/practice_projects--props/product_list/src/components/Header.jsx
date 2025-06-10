//Header will have product name and image

const Header = props => {
 return (
    <>
        <h1 className="item name">{props.name}</h1>
        <img className="img" src={props.image} />
    </>
 );
};

export default Header;