import React from 'react';

const Todo = props => {

    return (

        <div
      className={`item${props.todo.completed ? ' purchased' : ''}`}
      onClick={() => props.toggleItem(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
    )
}
export default Todo;
