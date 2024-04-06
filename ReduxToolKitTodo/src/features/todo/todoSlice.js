import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice ({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: () => {},
        removetodo: () => {},
        updatetodo: () => {}
    },
})

export const {addtodo, removetodo, updatetodo} = todoSlice.actions  
export default todoSlice.reducer