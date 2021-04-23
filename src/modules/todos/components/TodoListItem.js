import React from "react";

export default function TodoListItem({ item }) {
  const onItemClick = () => {
    props.onToggle(props.item.id);
  };

  return (
    <li onClick={onItemClick} style={getItemStyle(item)}>
      {item.title}
      <span onClick={onDeleteBtnClick}>X</span>
    </li>
  );
}

function getItemStyle({ completed }) {
  return {
    cursor: "pointer",
    backgroundColor: completed ? "green" : "yellow",
  };
}
