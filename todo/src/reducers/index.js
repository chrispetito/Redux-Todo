import { NEW_TODO, TOGGLE_TASK } from "../actions/index";

const initialState = {
  title: "this is an example title",
  todos: [
    { value: "This is your first task!", completed: false, id: Date.now() },
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TODO:
    //   console.log(action);
      return {
        ...state,
        todos: [...state.todos, {value: action.payload, completed: false, id: Date.now()}]
      };
      case TOGGLE_TASK:
      return {
          ...state, 
          todos: state.todos.map(task => {
              if (task.id === action.payload) {
                  return {
                      ...task,
                      completed: !task.completed
                  }
              }
              return task;
          })
      }
    default:
      return state;
  }
};
