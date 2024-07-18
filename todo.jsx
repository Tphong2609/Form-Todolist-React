import React, { useState, useCallback } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleAddTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        addTodo(inputValue.trim());
        setInputValue("");
      }
    },
    [inputValue, addTodo]
  );

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default TodoForm;
