
const Header = (props) => {
    return (
        <>
        <h2 className="title text">{props.title}</h2>
        <img className="img" src={props.poster} alt="poster" />
        </>

    );
};

export default Header;