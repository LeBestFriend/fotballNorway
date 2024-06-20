import React from 'react'
import TodoElement from './TodoElement'

export default function TodoList({myTodoList}) {
  return (
    <div>
        Dette er fra TodoList componenten

      {
        myTodoList.map(ele => {
          let number = 1
          return (
          <TodoElement key= {ele.id} TodoElement = {ele}/>
          )
        })
      }
      
    </div>
  )
}
