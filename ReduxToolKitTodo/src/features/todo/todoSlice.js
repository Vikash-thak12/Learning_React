import { createSlice, nanoid } from '@reduxjs/toolkit'
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
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
        removetodo: () => {},
        updatetodo: () => {}
    },
})

export const {addtodo, removetodo, updatetodo} = todoSlice.actions  
export default todoSlice.reducer