import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";
function Todo({ todos, completeTodo, removeTodo }) {


  return todos.map((todo, index) => (
    <div
    className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    key={index}
    >
       <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <MdDoneOutline
         className="delete-icon"
         onClick={() => completeTodo(todo.id)}
       />
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  ));
}

export default Todo;
