import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const counter = () => {
    setCount(count+1)
  }

  return (
    <>
     <h1>This is vikash Thakur</h1>
     <button onClick={counter}>Click here: {count}</button>
    </>
  )
}

export default App
