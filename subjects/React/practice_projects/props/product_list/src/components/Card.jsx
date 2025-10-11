//card
import Header from './Header';
import Body from './Body';

const Card = props => {
 return (
    <div className='card'>
        <Header name={props.productObject.name} image={props.productObject.image}/>
        <Body price={props.productObject.price} description={props.productObject.description}/>
    </div>
 );
};

export default Card;