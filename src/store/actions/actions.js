function deleteToDo(id) {
  return { type: "delete", payload: id };
}

function updateToDo(id) {
    return { type: "update", payload: id };
  }

  function createToDo(newItem) {
    return { type: "create", payload: newItem };
  }
