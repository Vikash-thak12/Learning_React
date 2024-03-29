// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1 className='bg-red-600 text-3xl p-5 rounded-2xl'>This is the webpage for the miniContext</h1>
    </UserContextProvider>
  )
}

export default App
