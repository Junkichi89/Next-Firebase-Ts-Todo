import React from 'react';
import {
  InputGroup,
  Input,
  Button,
} from '@chakra-ui/react'
import FilteringSelector from './FilteringSelector'

const EditTodoForm :React.FC<any> = ({ newTitle, handleEditFormChanges, handleEditTodo, handleCloseEditForm　}): any => {

  return (
    <>
      <InputGroup>
        <Input
          type='text'
          size="md"
          w="200px"
          mr="20px"
          label='新しいタイトル'
          value={newTitle}
          onChange={handleEditFormChanges}
        />
        <Button mr="20px" onClick={handleEditTodo}>編集を保存</Button>
        <Button mr="20px" onClick={handleCloseEditForm}>キャンセル</Button>
        <FilteringSelector　/>
      </InputGroup>
    </>
  )
}

export default EditTodoForm