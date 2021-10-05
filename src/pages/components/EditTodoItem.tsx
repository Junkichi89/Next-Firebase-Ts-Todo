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
import StatusSelector from './StatusSelector'
import { useState, useEffect } from 'react'

const EditTodoItem = ({ todo, onChange, openEditForm, deleteTodo }) => {

  return (
    <>
      <HStack
        spacing="20px"
        align="center"
      >
        <StatusSelector todo={todo} onChange={onChange}/>
        <Button onClick={() => openEditForm(todo)}>編集</Button>
        <Button colorScheme="pink" onClick={() => deleteTodo(todo)}>削除</Button>
      </HStack>
    </>
  )
}

export default EditTodoItem