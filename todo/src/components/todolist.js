import React from "react";

import { connect } from "react-redux";

import newTodo from "../actions/index";

class Todo extends React.Component {
  state = {
    newTodo: ""
  };

  render() {
    return <div>{this.props.todos.map((todo, index) => {
        return <div key={index}>{todo.value}</div>
    })}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state.todos);
  return {
    todos: state.todos
  };

};

export default connect(
  mapStateToProps,
  { newTodo }
)(Todo);