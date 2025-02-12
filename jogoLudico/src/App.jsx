import { useState } from 'react'
import './App.css'
import StoryCubes from './components/storyCubes'
import Cronometro from './components/Cronometro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StoryCubes />

      
    </>
  )
}

export default App
