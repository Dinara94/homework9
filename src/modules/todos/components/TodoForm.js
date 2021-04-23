import React from "react";

import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel
} from "@material-ui/core";

export default function TodoForm({ onSave }) {
  const [todo, setTodo] = useState({ title: "" });
  const newItem = {}

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSave(todo);
    setTodo({ title: "" });
  };

  const onInputChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={onFormSubmit}>
        <FormControl fullWidth>
          <InputLabel htmlFor="name">New item name</InputLabel>
          <Input
            type="text"
            name="title"
            value={todo.title}
            onChange={onInputChange}
          />
        </FormControl>
        <Button
         type="submit"
          variant="contained"
          className={classes.usersFormButton}
          color="secondary"
        >
          Save
        </Button>
      </form>
    </Container>
  );
}
