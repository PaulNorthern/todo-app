import React, { Component } from "react";

import "./todo-list-item.css";

// деструктуризация - достать значения из объекта
// который передается в качестве аргумента функции
const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
      >
        <i className="fa fa-trash" />
      </button>
    </span>
  );
};

export default TodoListItem;
