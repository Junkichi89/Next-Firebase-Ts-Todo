// ユーザー一覧を表示させる　
import {
  Button,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react'
import React, { useEffect, useState, } from 'react'
import { collection, query, onSnapshot } from 'firebase/firestore'
import { logout, useUser } from 'src/lib/auth'
import Link from 'next/link'
import UsersList from 'src/components/user/UsersList'
import { db } from 'src/lib/firebase'

interface Todo {
  id: string
  title: string
  status: string
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {

    const q = query(collection(db, 'users'))

    const unsub = onSnapshot(q, (snapshot) => {
      const usersList: any = snapshot.docs.map((doc) => ({
        id: doc.id, username: doc.data().displayName,
      }))
      setUsers(usersList)
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
        <UsersList users={users} />
      </Container>
    </>
  )
}

export default UserList
