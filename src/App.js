import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const toDoArray = [
  {
    todo: "Ride the hell bus",
    id: 1,
    completed: false
  },
  {
    todo: "Make code DRY",
    id: 2,
    completed: false
  },
  {
    todo: "Graduate from Lambda",
    id: 3,
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
    // add new item to the grocery list
    // need to follow immutability rules
    const newItem = {
      todo: newItemText,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      toDoArray: [...this.state.toDoArray, newItem]
    });
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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div className="list-container">
          <TodoForm
            addItem={this.addItem}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <ToDoList
          toggleCompleted={this.toggleCompleted}
          toDoArray={this.state.toDoArray}
        />
      </div>
    );
  }
}

export default App;
