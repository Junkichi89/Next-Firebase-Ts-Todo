import {
  Container,
  Heading,
  InputGroup,
  Input,
  Flex,
  HStack,
  Button,
  Select,
  ListItem,
  Text,
  OrderedList
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import EditTodoItem from '../components/EditTodoItem'

const TodoListItem = ({todo, onChange, openEditForm, deleteTodo}) => {

  return (
    <>
      <ListItem key={todo.id}>
        <Flex align="center" py="10px" justify="space-between">
          <Text fontSize="20px">{todo.title}</Text>
          <EditTodoItem todo={todo} onChange={onChange} openEditForm={openEditForm} deleteTodo={deleteTodo} />
        </Flex>
      </ListItem>
    </>
  )
}

export default TodoListItem