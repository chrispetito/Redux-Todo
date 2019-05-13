import React from "react";

import { connect } from "react-redux";

import newTodo from "../actions/index";

class Todo extends React.Component {
  state = {
    newTodo: ""
  };

  render() {
    return <div>{this.props.todo.map(todo => {
        return <div>{todo.value}</div>
    })}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state.todos);
  return {
    todo: state.todos
  };

};

export default connect(
  mapStateToProps,
  { newTodo }
)(Todo);
