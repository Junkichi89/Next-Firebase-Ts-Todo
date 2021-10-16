import React from 'react'
import { OrderedList } from '@chakra-ui/react'
import TodoListItem from '../components/TodoListItem'
import { filteredTodosState } from '../atoms/selector'
import { useRecoilValue } from 'recoil'

const TodoList = ({ openEditForm }) => {

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