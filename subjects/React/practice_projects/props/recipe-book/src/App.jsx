import Card from './components/Card';
import { recipes } from './assets/recipeBook';
import './App.css'

function App() {
  const recipesCard = recipes.map((recipeItem, index) => {
    return <Card recipeObj={recipeItem} key={index}/>
  });

  
  return recipesCard
};

export default App
