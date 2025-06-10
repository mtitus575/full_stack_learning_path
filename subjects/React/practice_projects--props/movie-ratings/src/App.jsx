import movieArr from './assets/movieArray';
import Card from './components/Card';
import './App.css'

function App() {
  const cardObject = movieArr.map((movie, index) => {
    return <Card key={index} movieObject={movie} />
  })

  return (
    <>
    <h1>Movie's and Popcorn</h1>
    <div>{cardObject}</div>
    </>
  );
  
}

export default App
