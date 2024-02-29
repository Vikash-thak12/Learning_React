import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let value = 15;
  let click = () => {
    console.log("Values added", new Date())
  }

  return (
    <>
    <h1>Welcome to the Webpage</h1>
    <h2>Counter Value: {value}</h2>
    <button onClick={click}>Click Here to get result</button>
    <br />
    <button>Submit</button>
    </>
  )
}

export default App
