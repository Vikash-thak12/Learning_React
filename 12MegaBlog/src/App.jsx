import { useEffect, useState } from 'react';
import './App.css'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth';
import { login, logout} from './store/authSlice'

const App = () => {

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  
  useEffect( () => {
    authservice.getCurrentUser()
    .then( (userData) => {
      if( userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally( () => setLoading(false))
  }, [])
  
  return (
    <>
    <h1>Building the Blog app</h1>
    </>
  );
};  

export default App;