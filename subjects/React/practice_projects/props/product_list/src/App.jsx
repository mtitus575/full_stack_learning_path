import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import products from './components/productsArray';

function App() {
  const productCard = products.map(item => <Card productObject={item}/>);
// This variable holds instances of the products array. It maps over it and returns an object that is placed into the Card component.
  console.log(productCard)
  
  return (
    <div>{productCard}</div>
  );
}

export default App;
