import React from "react";
import "./App.css";
import Todo from "./components/todolist";
import ToDoForm from "./components/todoform";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToDoForm />
        <Todo />
      </div>
    );
  }
}

export default App;
