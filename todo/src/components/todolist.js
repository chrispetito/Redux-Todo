import React from "react";

import { connect } from "react-redux";

import { newTodo, toggleTask } from "../actions/index";

class Todo extends React.Component {
  state = {
    newTodo: ""
  };

  toggleTask = id => {
    this.props.toggleTask(id);
  };

  render() {
    return (
      <div className='task-list'>
        {this.props.todos.map(todo => {
          return (
            <div
              onClick={() => this.toggleTask(todo.id)}
              className={todo.completed ? "todo-complete" : "todo-incomplete"}
              key={todo.id}
            >
              {todo.value}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.todos);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { newTodo, toggleTask }
)(Todo);
