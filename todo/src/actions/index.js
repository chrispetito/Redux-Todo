export const NEW_TODO = 'NEW_TODO'
export const TOGGLE_TASK = 'TOGGLE_TASK'

export const newTodo = todo => {
    // console.log(newTodo)
    return {
        type: NEW_TODO,
        payload: todo
    }
}

export const toggleTask = id => {
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}