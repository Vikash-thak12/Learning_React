import { createSlice, nanoid } from '@reduxjs/toolkit'
// import { act } from 'react-dom/test-utils'
const initialState = {
    todos: []
}

export const todoSlice = createSlice ({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removetodo: (state, action) => {
            state.todos = state.todos.filter( (todo) => todo.id !== action.payload)
        },
        updatetodo: (state, action) => {
                const { id, newText } = action.payload
                const todoToUpdate = state.todos.find( (todo) => todo.id === id);
                if(todoToUpdate){
                    todoToUpdate.text = newText;
        }
    },
})

export const {addtodo, removetodo, updatetodo} = todoSlice.actions  
export default todoSlice.reducer