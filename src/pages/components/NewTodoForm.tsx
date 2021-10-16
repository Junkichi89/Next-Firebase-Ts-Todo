import {
  InputGroup,
  Input,
  Button,
} from '@chakra-ui/react'
import FilteringSelector from '../components/FilteringSelector'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import  { todosState } from '../atoms/atom'

const NewTodoForm = () => {

  const [todoTitle, setTodoTitle] = useState('')
  const [todos, setTodos] = useRecoilState(todosState)
  const handleAddFormChanges = (e) => {
    setTodoTitle(e.target.value)
  }

  const resetFormInput = () => {
    setTodoTitle('')
  }

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length, title: todoTitle, status: 'notStarted' },
    ])
    resetFormInput()
  }

  return (
    <>
      <InputGroup size="md" px="20px">
        <Input
          type='text'
          size="md"
          w="200px"
          mr="20px"
          label='タイトル'
          placeholder="Enter Things to do"
          value={todoTitle}
          onChange={handleAddFormChanges}
        />
        <Button mr="20px" onClick={handleAddTodo}>作成</Button>
        <FilteringSelector />
      </InputGroup>
    </>
  )
}

export default NewTodoForm