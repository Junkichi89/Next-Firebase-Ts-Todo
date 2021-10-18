import {
  InputGroup,
  Input,
  Button,
} from '@chakra-ui/react'
import FilteringSelector from '../components/FilteringSelector'
import { ChangeEvent, useState } from 'react'
import { db } from '../../lib/firebase'
import { addDoc, collection } from 'firebase/firestore'


const NewTodoForm = () => {

  const [todoTitle, setTodoTitle] = useState('')

  const handleAddFormChanges = (e:ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value)
  }

  const resetFormInput = () => {
    setTodoTitle('')
  }


  const handleAddTodo = async () => {
    await addDoc(collection(db, 'todos'), { title: todoTitle, status: 'notStarted' })
      .then((docRef) => {
        console.log(docRef, "NewTodo has been added to Firebase")
      })
      .catch((e) => {
        console.error('Error adding document: ', e)
      })
      .finally(() => console.log('finally'))

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