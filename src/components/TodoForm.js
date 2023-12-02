import React from 'react'

export const TodoForm = () => {
  return (
    <form className='TodoForm'>
      <input type='input' className='todo-input' placeholder='What is next on your list?' />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
