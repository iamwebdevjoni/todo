import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row"></div>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;

///test
