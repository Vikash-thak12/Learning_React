import { useState } from 'react';
import './App.css'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth'

const App = () => {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  
  return (
    <>
    <h1>Building the Blog app</h1>
    </>
  );
};  

export default App;