import Card from './components/Card';
import {comments} from './assets/commentData.js';


function App() {
  const card = comments.map((comment, index) => <Card key={index} commentObject={comment}/>)
  
  return <div id='main-container'>{card}</div>
};

export default App;



