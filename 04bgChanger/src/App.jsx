import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColour] = useState("olive")


  return (
    <>
      <div className="mainContainer w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="innerContainer bg-white">
          <div className="card bg-red-600" onClick={() => setColour("red")}>Red</div>
          <div className="card bg-green-600" onClick={() => setColour("green")}>Green</div>
          <div className="card bg-orange-600" onClick={() => setColour("orange")}>Orange</div>
          <div className="card bg-purple-600" onClick={() => setColour("purple")}>Purple</div>
          <div className="card bg-gray-600" onClick={() => setColour("gray")}>Gray</div>
          <div className="card bg-yellow-600" onClick={() => setColour("yellow")}>Yellow</div>
          <div className="card bg-blue-600" onClick={() => setColour("blue")}>Blue</div>
          <div className="card bg-black text-white" onClick={() => setColour("black")}>Black</div>
          <div className="card bg-pink-600" onClick={() => setColour("pink")}>Pink</div>
          <div className="card bg-indigo-600" onClick={() => setColour("indigo")}>Indigo</div>
        </div>
      </div>
    </>
  )
}

export default App
