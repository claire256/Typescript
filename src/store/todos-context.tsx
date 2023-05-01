import React, { useState } from 'react'
import Todo from '../models/todo'

type TodosContextObj ={
    items: Todo[];
    addTodo: (id: string)=> void;
    removeTodo: (id: string) => void
    
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: (text: string)=>{},
    removeTodo: (id: string)=> {},

}) 

export const TodosContextProvider = ({children}:any)=>{
   
  const [todos, setTodos] = useState<Todo[]>([])
  
  const addTodoHandler = (todoText: string)=> {
    const newTodo = new Todo(todoText)

    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo)
    })
  }
  const onRemoveHandler = (todoId: string)=>{
     setTodos((prevTodos)=>{
       return prevTodos.filter((todo) => todo.id!== todoId)
     })
    }
   const contextValue:TodosContextObj  = {
       items: todos,
       addTodo: addTodoHandler,
       removeTodo: onRemoveHandler
   }  

  return <TodosContext.Provider value={contextValue}>
        {children}
    </TodosContext.Provider>
} 