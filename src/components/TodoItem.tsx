import React from "react";

const TodoItem: React.FC<{text: string; onRemove: () => void}> = (props)=>{
   return <li onClick={props.onRemove}>{props.text}</li>
}

export default TodoItem;