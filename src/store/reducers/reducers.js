const INITIAL_STATE = {
  list: [
    {
      id: 2,
      title: "ddbbbeabdeb",
      isDone: true,
    },
    {
      id: 3,
      title: "ghngmhy,",
      isDone: false,
    },
    {
      id: 4,
      title: "cdbbnhjq",
      isDone: true,
    },
  ],
};

export default function reducers(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case 'delete': return state.filter((item) => item.id !== payload);
    case 'update': return [ ...state, ];
    case 'create': return [ ...state, payload];
    default: return state;
  }
}


// ПЕРЕКЛЮЧАЛКА СОСТОЯНИЯ

/* const toggleItem = (id) => {
  const item = list.find((l) => l.id === id);
  const newItem = { ...item, completed: !item.completed };

  updateTodo(newItem).then(() => {
    setList(list.map((item) => (item.id !== id ? item : newItem)));
  });
};
 */


// ДОБАВЛЕНИЕ НОВОГО АЙТЕМА

/* const createItem = (newItem) => {
  newItem.completed = false;
  createTodo(newItem).then((data) => {
    setList([...list, data]);
  });
}; */

// УДАЛЕНИЕ АЙТЕМА

/* const deleteItem = (id) => {
  deleteTodo(id);
  setList(list.filter((item) => item.id !== id));
}; */