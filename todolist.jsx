import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => deleteTodo(index)}>Xóa</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
