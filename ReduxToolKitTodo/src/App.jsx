import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const [count, setCount] = useState(0)
  const counter = () => {
    setCount(count+1)
  }

  return (
    <>
    <Navbar count = {count} />
     <h1>This is vikash Thakur</h1>
     <button onClick={counter}>Click here: {count}</button>
    </>
  )
}

export default App
