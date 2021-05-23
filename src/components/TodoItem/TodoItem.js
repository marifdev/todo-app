import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id } = props;

  return (
    <div className="d-flex justify-content-between align-items-center">
      <span>{content}</span>
      <button className="btn btn-danger float-right" onClick={() => props.deleteTodo(id)}>Sil</button>
    </div>
  );
}

export default Todo;
