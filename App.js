// // import logo from './logo.svg';
// import React from "react";
import "./App.css";
// // import HomePage from "./components/pages/HomePage";
// import Demo from "./components/Demo";
import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import TodoForm from "./components/ToDoForm/todo";
import TodoList from "./components/ToDoList/todolist";
import Footer from "./components/Footer/";

export default function App() {
  //code js here:
  // const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  }, []);

  const deleteTodo = useCallback((index) => {
    setTodos((prevTodos) =>
      prevTodos.filter((_, todoIndex) => todoIndex !== index)
    );
  }, []);

  return (
    <div>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
}
// export default TodoApp;
// }
