// ユーザー一覧を表示させる　
import {
  Button,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react'
import TodoList from '../components/TodoList'
import { useSetRecoilState } from 'recoil'
import React, { useEffect, useState, } from 'react'
import { db } from '../lib/firebase'
import { collection, query, onSnapshot } from 'firebase/firestore'
import { todosState } from 'src/atoms/atom'
import { logout, useUser } from 'src/lib/auth'
import Link from 'next/link'

interface Todo {
  id: string
  title: string
  status: string
}

const App: React.FC = () => {
  /** Todoリスト */
  const setTodos = useSetRecoilState(todosState)

  useEffect(() => {

    const q = query(collection(db, 'todos'))

    const unsub = onSnapshot(q, (snapshot) => {
      const newTodos = snapshot.docs.map((doc) => ({
        id: doc.id, title: doc.data().title,
        status: doc.data().status, detail: doc.data().detail
      }))
      setTodos(newTodos)
    })
    return () => unsub()

  }, [])


  // ログインサンプル追加
  const user = useUser()
  console.log(user?.uid)

  const handleLogout = (): void => {
    logout().catch((error) => console.error(error))
  }


  return (
    <>
      <Container mt="200px" border="1px solid" borderRadius="5px" p="20px">
        <Flex justify="space-between" align="center" pb="20px">
          <Heading>Next Todo</Heading>
          <Link href="/create" passHref>
            <Button bg="lightblue">
              <a>
                作成
              </a>
            </Button>
          </Link>
        </Flex>
        <TodoList />
      </Container>
      <div>
        <h1>Auth Example</h1>
        {user !== null ? (
          <h2>ログインしている</h2>
        ) : (
          <h2>ログインしていない</h2>
        )}
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    </>
  )
}

export default App
