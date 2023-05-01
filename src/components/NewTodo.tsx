import React,{useRef, useContext}  from "react"
import { TodosContext } from "../store/todos-context"

const NewTodo: React.FC = ()=>{
    const todosCtx = useContext(TodosContext)
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHand= (event: React.FormEvent)=>{
        event.preventDefault()

        const enteredText= todoTextInputRef.current!.value
    
        if(enteredText.trim().length === 0){
            return;
        }
        todosCtx.addTodo(enteredText)

    }

    return <form onSubmit={submitHand}>
     <label htmlFor ="text">Todo</label>
     <input type="text" id='text' ref={todoTextInputRef}/>
     <button>Add</button>
    </form>
}

export default NewTodo