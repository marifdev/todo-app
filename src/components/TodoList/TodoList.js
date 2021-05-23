import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const finishTodo = (e) => {
    e.target.classList.toggle("todo-done")
  }
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className="list-group-item" onClick={finishTodo}>
              <TodoItem {...todo} key={todo.id} deleteTodo={props.deleteTodo}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
