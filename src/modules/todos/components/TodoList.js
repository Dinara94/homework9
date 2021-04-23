import React from "react";
import TodoListItem from "./TodoListItem";

import { Container } from "@material-ui/core";

export default function TodoList({list}) {

  return (
    <Container maxWidth="sl">
    <ul>
      {list.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
        />
      ))}
    </ul>
    </Container>
  );
}
