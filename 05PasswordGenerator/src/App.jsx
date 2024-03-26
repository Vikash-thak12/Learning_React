import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [numberallowed, setNumberallowed] = useState(false);
  const [characterallowed, setCharacterallowed] = useState(false);
  const [password, setPassword] = useState("");



  // usecallback in react js
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberallowed) {
      str += "0123456789"
    }
    if(characterallowed) {
      str += "!@#$%^&*~*-+/";
    }

    for(let i=1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);


    
  }, [length, numberallowed, characterallowed, setPassword]);

  // Useref in react js
  const passwordRef = useRef(null);

  const copytoclipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password])


  // UseEffect in React Js
  useEffect(() => {
    passwordGenerator();
  }, [length, numberallowed, characterallowed, passwordGenerator])

  return (
    <>
      <div className="main-container">
        <h1>Password Generator</h1>
        <div className="inputs">
          <input value={password} type="text" readOnly placeholder='password' ref={passwordRef} />
          <button onClick={copytoclipboard} className='btn'>Copy</button>
        </div>

        <div className="lower">
          <div className="first">
            <input type="range" min={0} max={50} value={length}
            onChange={(e) => {setLength(e.target.value)}}
            /> 
            <label>Length ({length})</label>
          </div>
          <div className="second"> 
            <input type="checkbox" className='char' defaultChecked={numberallowed} onChange={() => {setNumberallowed((prev) => !prev)}} /> 
            <label>Numbers</label>
          </div>
          <div className="third">
            <input type="checkbox" className='char' defaultChecked={characterallowed} onChange={() => {setCharacterallowed((prev) => !prev)}}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
