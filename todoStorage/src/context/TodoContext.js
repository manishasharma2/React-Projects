import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [//variable array with object element
        {
            id: 1,
            todo: "To do msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) =>{},
    toogleComplete: (id) =>{}
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider =  TodoContext.Provider


//delete, edit, add,checked