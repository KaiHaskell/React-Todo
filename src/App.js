import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import "./components/TodoComponents/Todo.css";

const toDoArray = [
  {
    todo: "Stretch problems",
    id: 1,
    completed: false
  },
  {
    todo: "Make code DRY",
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoArray: toDoArray
    };
  }

  addItem = newItemText => {
    const newItem = {
      todo: newItemText,
      id: Date.now(),
      completed: false
    };
    this.setState({ toDoArray: [...this.state.toDoArray, newItem] });
  };

  clearCompleted = () => {
    this.setState({
      toDoArray: this.state.toDoArray.filter(item => {
        if (item.completed === false) {
          return {};
        }
      })
    });
  };

  toggleCompleted = id => {
    this.setState({
      toDoArray: this.state.toDoArray.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  render() {
    return (
      <div className="main-container">
        <div className="list-container">
          <TodoForm
            addItem={this.addItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <TodoList
          toggleCompleted={this.toggleCompleted}
          toDoArray={this.state.toDoArray}
        />
      </div>
    );
  }
}

export default App;
