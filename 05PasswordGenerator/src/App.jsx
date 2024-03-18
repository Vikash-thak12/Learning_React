import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-container">
        <h1>Password Generator</h1>
        <div className="inputs">
          <input type="text" readOnly placeholder='password' />
          <button className='btn'>Copy</button>
        </div>

        <div className="lower">
          <div className="first">
            <input type="range" /> Length(8)
          </div>
          <div className="second">
            <input type="checkbox" className='char' /> Numbers
          </div>
          <div className="third">
            <input type="checkbox" className='char'/> Characters
          </div>
        </div>
      </div>
    </>
  )
}

export default App
