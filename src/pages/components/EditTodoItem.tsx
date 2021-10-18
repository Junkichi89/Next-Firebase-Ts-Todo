import React from 'react'
import { HStack, Button } from '@chakra-ui/react'
import StatusSelector from './StatusSelector'
import { deleteDoc } from '@firebase/firestore'
import { db } from 'src/lib/firebase'
import { collection, doc } from 'firebase/firestore'

const EditTodoItem: React.FC<any> = ({ todo, openEditForm }) => {

  const todosRef = collection(db, 'todos')

  const handleDeleteTodo = async () => {
    await deleteDoc(doc(todosRef, todo.id))
  }
  return (
    <>
      {todo &&
        <HStack
          spacing="20px"
          align="center"
        >
          <StatusSelector todo={todo} />
          <Button onClick={() => openEditForm(todo)}>編集</Button>
          <Button colorScheme="pink" onClick={handleDeleteTodo}>削除</Button>
        </HStack>
      }
    </>
  )
}

export default EditTodoItem