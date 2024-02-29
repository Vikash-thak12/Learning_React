import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value, setvalue] = useState(12)
  let click = () => {
    console.log("Values added", value)
    setvalue(value + 1)
  }

  let remove = () => {
    if(value > 0){
      console.log("Removed: ", value)
      setvalue(value - 1)
    }
  }
  

  return (
    <>
    <h1>Welcome to the Webpage</h1>
    <h2>Counter Value: {value}</h2>
    <button onClick={click}>Add value {value}</button>
    <br />
    <button onClick={remove}>Remove value {value}</button>
    </>
  )
}

export default App
