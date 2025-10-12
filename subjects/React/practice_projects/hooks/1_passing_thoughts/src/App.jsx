import { useState } from 'react'
import './App.css'
import { generateExpiration, generateId } from './components/utilities/helpers'
import AddThoughtForm from './components/AddThoughtForm'

function App() {
  const [thought,setThought] = useState([
    {
      id: generateId(),
      text: 'Thinking out loud',
      isExpired: generateExpiration()
    },
    {
      id: generateId(),
      text: 'I am working on React',
      isExpired: generateExpiration()
    }
  ])
  

return (
  <>
    <AddThoughtForm />
  </>
);
}

export default App
