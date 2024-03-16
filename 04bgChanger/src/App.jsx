import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="mainContainer">
        <div className="card bg-red-600" >Red</div>
        <div className="card bg-green-600">Green</div>
        <div className="card bg-orange-600">Orange</div>
        <div className="card bg-purple-600">Purple</div>
        <div className="card bg-gray-600">Gray</div>
        <div className="card bg-yellow-600">Yellow</div>
        <div className="card bg-blue-600">Blue</div>
      </div>
    </>
  )
}

export default App
