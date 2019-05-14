import React from 'react'

const Todo = (props) => {
    console.log(props.todo.value)
    return (
        <div>
            {props.value}
        </div>
    )
}
export default Todo;