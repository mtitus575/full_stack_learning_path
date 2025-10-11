
function ImageContainer(props) {
    return (
        <>
            <img className="img" src={props.image} />
            <p>{props.description}</p>
        </>
    )
}

export default ImageContainer;