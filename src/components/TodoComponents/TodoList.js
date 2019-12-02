import React from "react";

import Todo from "./Todo";

const ToDoList = props => {
  return (
    <div className="todo-list">
      {props.toDoArray.map(item => (
        <Todo
          key={item.id}
          toggleCompleted={props.toggleCompleted}
          item={item}
        />
      ))}
    </div>
  );
};

export default ToDoList;
