export const NEW_TODO = 'NEW_TODO'

export const newTodo = newTodo => {
    console.log(newTodo)
    return {
        type: NEW_TODO,
        payload: newTodo
    }
}

export default newTodo;