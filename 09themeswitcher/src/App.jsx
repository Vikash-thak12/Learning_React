import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './contexts/theme'
import ThemeBtn from './components/ThemebBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThememode] = useState("light")

  const lightMode = () => {
    setThememode("light")
  }

  const darkMode = () => {
    setThememode("dark")
  }

  useEffect( () => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode)
  })

  return (
    <Themeprovider value={{themeMode, lightMode, darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </Themeprovider>
  )
}

export default App
