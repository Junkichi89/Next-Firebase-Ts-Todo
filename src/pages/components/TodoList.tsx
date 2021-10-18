import React, { useEffect, useState } from 'react'
import { OrderedList } from '@chakra-ui/react'
import TodoListItem from '../components/TodoListItem'
import { useRecoilValue } from 'recoil'
import { filteredTodosState } from 'src/atoms/selector'


const TodoList: React.FC<any> = ({ openEditForm }) => {

  const todos = useRecoilValue(filteredTodosState)


  return (
    <OrderedList>
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} openEditForm={openEditForm} />
      ))}

    </OrderedList>
  )
}

export default TodoList