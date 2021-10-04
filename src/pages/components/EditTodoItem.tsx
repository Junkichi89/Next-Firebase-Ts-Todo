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

const EditTodoItem = ({ todo, onChange, openEditForm, deleteTodo }) => {

  return (
    <>
      <HStack
        spacing="20px"
        align="center"
      >
        <Select
          w="100px"
          value={todo.status}
          onChange={(e) => onChange(todo, e)}
        >
          <option value='notStarted'>未着手</option>
          <option value='inProgress'>作業中</option>
          <option value='done'>完了</option>
        </Select>
        <Button onClick={() => openEditForm(todo)}>編集</Button>
        <Button colorScheme="pink" onClick={() => deleteTodo(todo)}>削除</Button>
      </HStack>
    </>
  )
}

export default EditTodoItem