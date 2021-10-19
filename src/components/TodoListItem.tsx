import React from 'react'
import Link from 'next'
import {
  Flex,
  ListItem,
  Text,
} from '@chakra-ui/react'
import EditTodoItem from './EditTodoItem'

const TodoListItem: React.FC<any> = ({ todo, openEditForm }) => {

  return (
    <>
      {todo &&
        <ListItem key={todo.id}>
          <Flex align="center" py="10px" justify="space-between">
            <Text fontSize="20px">{todo.title}</Text>
            <EditTodoItem todo={todo} openEditForm={openEditForm} />
            {/* <Link > */}
              <a href={`/todo/${todo.id}`}>
                リンク
              </a>
            {/* </Link> */}
          </Flex>
        </ListItem>
      }
    </>
  )
}

export default TodoListItem