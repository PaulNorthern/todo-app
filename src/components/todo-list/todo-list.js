import React from "react";

import TodoListItem from "../todo-list-item";
import "./todo-list.css";

// onDeleted получаем сверху из app.js
const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {
    // JSX занимает несколько строк кода поэтому оборачиваем в ()
    const { id, ...itemProps } = item;
    return (
      // spread - позволяет разложить на коллекцию ключей и значений
      // взять каждое св-во из item и передать в качестве атрибута со значением
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
