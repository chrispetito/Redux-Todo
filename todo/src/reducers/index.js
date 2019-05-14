import { NEW_TODO } from "../actions/index";

const initialState = {
  title: "this is an example title",
  todos: [
    { value: "blah", completed: false, id: 320948032948 },
    { value: "blah", completed: false, id: 49034902 }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TODO:
      console.log(action);
      return {
        ...state,
        todos: [...state.todos, {value: action.payload, completed: false}]
      };
    default:
      return state;
  }
};
