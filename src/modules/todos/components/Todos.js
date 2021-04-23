import React, { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../services/todosService";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Typography } from '@material-ui/core';

export default function Todos() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getTodos().then((list) => setList(list));
  }, [list]);

  const toggleItem = (id) => {
    const item = list.find((l) => l.id === id);
    const newItem = { ...item, completed: !item.completed };

    updateTodo(newItem).then(() => {
      setList(list.map((item) => (item.id !== id ? item : newItem)));
    });
  };

  const deleteItem = (id) => {
    deleteTodo(id);
    setList(list.filter((item) => item.id !== id));
  };


  return (
    <>
      <Typography variant="h3">ToDos List</Typography>
      <TodoList list={list} />
      <TodoForm onSave={createItem} />
    </>
  );
}
