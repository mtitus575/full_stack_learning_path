//Header component for the Card.
//It contains an image and a username.

function Header(props) {
    return (
        <>
            <img id='profilephoto' src={props.profileImg} />
            <h1>{props.username}</h1>
        </>
    );
};

export default Header;