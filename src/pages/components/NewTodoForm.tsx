import {
  InputGroup,
  Input,
  Button,
} from '@chakra-ui/react'
import FilteringSelector from '../components/FilteringSelector'

const NewTodoForm = ({ todoTitle, filter, handleAddFormChanges, handleAddTodo, handleFilterChange }) => {

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
        <FilteringSelector filter={filter} onChange={handleFilterChange} />
      </InputGroup>
    </>
  )
}

export default NewTodoForm