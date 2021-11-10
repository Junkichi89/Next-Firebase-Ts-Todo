import React from 'react'
import { useRecoilValue } from 'recoil'
import { todosState } from 'src/atoms/atom'


interface Todo {
  id: string
  title: string
  status: string
}


const Todo = ({ id }:any) => {

  const todos = useRecoilValue(todosState)
  const item = todos.filter((todo) => todo.id === id)
  console.log(todos)
  return (
    item.map(todo => (
    <>
      <div key="todo.id">{todo.title}</div>
    </>
    )
    ))
}

export default Todo