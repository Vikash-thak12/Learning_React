import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'

function App() {

  const [todos, setTodos] = useState([])


  // for adding the todos in the array
  const  todoadd = (todo) => {
    setTodos( (prev) => [{id: Date.now(), ...todo},...prev])
  }

  // for updating the todo in the array
  const todoupdate = (id, todo) => {
    setTodos((prev) => prev.map( (prevtodo) => (prevtodo.id === id ? todo : prevtodo)))
  }

  // for deleting a todo from the array
  const tododelete =(id) => {
    setTodos( (prev) => prev.filter( (prevtodo) => (prevtodo.id !== id)))
  }


  // for cheking if the todos are completed or not 
  const togglecomplete = (id) => {
    setTodos( (prev) => prev.map( (prevtodo) => prevtodo.id === id ? {...prevtodo, completed: !prevtodo.completed} : prevtodo))
  }

  // For loading the prev todos if there are on the webpage
  useEffect( () => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  })

  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, todoadd, tododelete, todoupdate, togglecomplete}}>
      <div className="bg-[#31496c] min-h-screen">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>

          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
          
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
