import {
  Container,
  Heading,
} from '@chakra-ui/react'
import TodoList from '../components/TodoList'
import NewTodoForm from '../components/NewTodoForm'
import EditTodoForm from '../components/EditTodoForm'
import { useSetRecoilState } from 'recoil'
import React, { useEffect, useState, } from 'react'
import { db } from '../lib/firebase'
import { collection, query, onSnapshot, setDoc, doc } from 'firebase/firestore'
import { todosState } from 'src/atoms/atom'

interface Todo {
  id: string
  title: string
  status: string
}

const App: React.FC = (props: any) => {
  /** Todoリスト */
  const setTodos = useSetRecoilState(todosState)
  const [isEditable, setIsEditable] = useState(false)
  const [editId, setEditId] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const todosRef = collection(db, 'todos')

  const handleEditFormChanges: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTitle(e.target.value)
  }

  /** 編集フォーム表示 */
  const handleOpenEditForm = ({ id, title }: Todo) => {
    setIsEditable(true)
    setEditId(id)
    setNewTitle(title)
  }

  /** 編集フォームを閉じる */
  const handleCloseEditForm = () => {
    setIsEditable(false)
    setEditId('')
  }

  /** Todo編集 */
  const handleEditTodo = async () => {
    await setDoc(
      doc(todosRef, editId),
      { title: newTitle, },
      { merge: true }
    )
    setNewTitle('')
    handleCloseEditForm()
    setEditId('')
  }

  useEffect(() => {

    const q = query(collection(db, 'todos'))

    const unsub = onSnapshot(q, (snapshot) => {
      const newTodos = snapshot.docs.map((doc) => ({
        id: doc.id, title: doc.data().title, status: doc.data().status
      }))
      setTodos(newTodos)
    })
    return () => unsub()

  }, [])

  return (
    <>
      <Container mt="200px" border="1px solid" borderRadius="5px" p="20px">
        <Heading pb="20px">Next Todo</Heading>
        {!isEditable ? (
          /* 新規作成フォーム */
          <>
            <NewTodoForm />
          </>
        ) : (
          /* 編集フォーム */
          <>
            <EditTodoForm
              newTitle={newTitle}
              handleEditFormChanges={handleEditFormChanges}
              handleEditTodo={handleEditTodo}
              handleCloseEditForm={handleCloseEditForm}
            />
          </>
        )}

        {/* Todoリスト */}
        <TodoList openEditForm={handleOpenEditForm} />
      </Container>
    </>
  )
}

export default App
