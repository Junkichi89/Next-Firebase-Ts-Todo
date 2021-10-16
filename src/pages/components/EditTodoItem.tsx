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
import { useRecoilState } from 'recoil'
import  { todosState } from '../atoms/atom'

const EditTodoItem = ({ todo, openEditForm }) => {

  const [todos, setTodos] = useRecoilState(todosState)
  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo))
  }
  return (
    <>
      <HStack
        spacing="20px"
        align="center"
      >
        <StatusSelector todo={todo}/>
        <Button onClick={() => openEditForm(todo)}>編集</Button>
        <Button colorScheme="pink" onClick={() => handleDeleteTodo(todo)}>削除</Button>
      </HStack>
    </>
  )
}

export default EditTodoItem