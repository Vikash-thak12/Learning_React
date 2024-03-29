import React, {useState, useContext} from 'react';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter your name' />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;