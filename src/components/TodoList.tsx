import React, { useEffect, useState } from 'react'
import { OrderedList } from '@chakra-ui/react'
import TodoListItem from './TodoListItem'
import { useRecoilValue } from 'recoil'
import { filteredTodosState } from 'src/atoms/selector'
import { useUser } from 'src/lib/auth'


const TodoList: React.FC<any> = ({ openEditForm }) => {

  const allTodos = useRecoilValue(filteredTodosState)
  const user = useUser()

  const userTodos = allTodos.filter(todo => todo.uid === user?.uid)
  return (
    <OrderedList>
      {userTodos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} openEditForm={openEditForm} />
      ))}

    </OrderedList>
  )
}

export default TodoList