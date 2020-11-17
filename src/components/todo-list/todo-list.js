import React from "react";

import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    // JSX занимает несколько строк кода поэтому оборачиваем в ()
    const { id, ...itemProps } = item;
    return (
      // spread - позволяет разложить на коллекцию ключей и значений
      // взять каждое св-во из item и передать в качестве атрибута со значением
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
