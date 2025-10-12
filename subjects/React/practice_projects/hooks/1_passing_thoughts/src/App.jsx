import { useState } from 'react'
import './App.css'
import { generateExpiration, generateId } from './components/utilities/helpers'
import AddThoughtForm from './components/AddThoughtForm'
import Thoughts from './components/Thoughts'

function App() {
  const [thoughts,setThoughts] = useState([
    {
      id: generateId(),
      text: 'Thinking out loud',
      expiresIn: generateExpiration()
    },
    {
      id: generateId(),
      text: 'I am working on React',
      expiresIn: generateExpiration()
    }
  ])

  const addThought =(thoughtToAdd)=>{
    setThoughts((prevThoughts) => {
      return [...prevThoughts, thoughtToAdd]
    })
  }
  
return (
  <>
    <AddThoughtForm thoughts={thoughts} addThought={addThought} />
    <div>
      <Thoughts thoughts={thoughts}  />
    </div>
  </>
);
}

export default App
