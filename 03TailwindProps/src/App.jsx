import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-green-500 text-black p-4 rounded-xl'>Welcome to my Webpage:</h2>
      <Card name="vikash" />
      <Card name="Sharma" />
    </>
  )
}

export default App
