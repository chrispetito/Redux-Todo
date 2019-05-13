import { NEW_TODO } from '../actions/index'

const initialState = {
    title: 'this is an example title'
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case NEW_TODO:
        console.log(action)
        return {
            ...state,
            todos: action.payload
        }
        default:
        return state;
    }
}