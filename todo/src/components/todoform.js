import React from "react";
import { newTodo } from "../actions/index";
import { connect } from "react-redux";

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  addTask = event => {
    event.preventDefault();
    if (!this.state.value) return;
    this.props.newTodo(this.state.value);
    this.setState({
        value: ''
    })
  };

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    // console.log(this.props.todos);
    return (
      <div>
        <form onSubmit={this.addTask}>
        <input
          name="value"
          value={this.state.value}
          onChange={this.handleChanges}
        />
        <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
//   console.log(state.todos);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { newTodo }
)(ToDoForm);
