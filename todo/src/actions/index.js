export const NEW_TODO = 'NEW_TODO'

export const newTodo = todo => {
    console.log(newTodo)
    return {
        type: NEW_TODO,
        payload: todo
    }
}

export default newTodo; 