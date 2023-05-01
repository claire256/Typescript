import React, {useContext} from 'react';
import TodoItem from './TodoItem'
import {TodosContext} from '../store/todos-context'

const Todos: React.FC =(props)=>{
    const todosCtx = useContext(TodosContext)

    return <ul>
        {todosCtx.items.map((item)=>{
         return <TodoItem 
         key={item.id} 
         onRemove={todosCtx.removeTodo.bind(null, item.id)} 
         text={item.text}
         />
        })}
    </ul>
}

export default Todos;