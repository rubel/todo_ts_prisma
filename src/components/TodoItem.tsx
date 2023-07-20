"use client"

import { type } from 'os'
import React from 'react'

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    todoClicked: (id:string, complete:boolean)=>void
}


function TodoItem({id,title,complete,todoClicked}:TodoItemProps) {
  return (
    <div className='cursor-pointer' onClick={()=>{
        todoClicked(id,complete);
    }} style={complete?{color: 'gray'}:{color:'white'}}>
        <span>{title}</span>
    </div>
  )
}

export default TodoItem