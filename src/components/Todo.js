import React from "react";

const Todo = ({ todos, completeTodo, removeTodo }) => {
  return todos.map((todo, index) => (
    <div
      className={`todo ${todo.isCompleted ? "completed" : ""}`}
      key={todo.id}
    >
      <div className="todo-text" onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <button onClick={() => removeTodo(todo.id)} className="delete-icon">
          Delete
        </button>
      </div>
    </div>
  ));
};

export default Todo;
