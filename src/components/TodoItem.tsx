import { type } from 'os'
import React from 'react'

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean
}

function TodoItem({id,title,complete}:TodoItemProps) {
  return (
    <div style={complete?{color: 'gray'}:{color:'black'}}>{title}</div>
  )
}

export default TodoItem