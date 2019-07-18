import React from "react";
import { newTodo, deleteTask } from "../actions/index";
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
      value: ""
    });
  };

  handleChanges = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  deleteTask = id => {
    this.props.deleteTask(id);
  };

  render() {
    // console.log(this.props.todos);
    return (
      <div className='task-box'>
        <form className="task-form" onSubmit={this.addTask}>
          <input
          placeholder='New Task'
            className="task-input"
            name="value"
            value={this.state.value}
            onChange={this.handleChanges}
          />

            <button className='submit-button'>Submit</button>
            
        </form>
        <button className='delete-button' onClick={this.deleteTask}>CLEAR COMPLETED</button>
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
  { newTodo, deleteTask }
)(ToDoForm);
