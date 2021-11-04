import React, { useEffect } from 'react'
import { query } from '@firebase/firestore'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { useRecoilState } from 'recoil'
import { todosState } from 'src/atoms/atom'
import { db } from 'src/lib/firebase'


interface Todo {
  id: string
  title: string
  status: string
}


const Todo = ({ id }:any) => {

  const [todos, setTodos] = useRecoilState(todosState)
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