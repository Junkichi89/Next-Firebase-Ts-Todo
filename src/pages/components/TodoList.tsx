import React from 'react'
import { OrderedList } from '@chakra-ui/react'
import TodoListItem from '../components/TodoListItem'

const TodoList = ({todos, onChange, openEditForm, deleteTodo }) => {

  return (
    <OrderedList>
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} onChange={onChange} openEditForm={openEditForm} deleteTodo={deleteTodo} />
         ))}

    </OrderedList>
  )
}

export default TodoList