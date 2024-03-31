import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false,

        }
    ],

    todoadd: (todo) => {},
    todoupdate: (id, todo) => {},
    tododelete: (id) => {},
    togglecomplete: (id) => {}
});

export const UseContext = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;