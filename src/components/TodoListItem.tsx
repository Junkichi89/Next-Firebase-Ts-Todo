import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import {
  Button,
  Flex,
  ListItem,
  Text,
} from '@chakra-ui/react'
import { deleteDoc } from '@firebase/firestore'
import { collection, doc } from 'firebase/firestore'
import { db } from 'src/lib/firebase'

const TodoListItem: React.FC<any> = ({ todo }) => {

  const todosRef = collection(db, 'todos')
  const handleDeleteTodo = async () => {
    await deleteDoc(doc(todosRef, todo.id))
  }
  const router = useRouter()




  return (
    <>
      {todo &&
        <ListItem key={todo.id}>
          <Flex align="center" py="10px" justify="space-between">
            <Text fontSize="20px">{todo.title}</Text>
            <Flex justify="flex-end">
              <Button colorScheme="pink" onClick={handleDeleteTodo} mr="4">削除</Button>
              <Button mr="4" onClick={() => {

                router.push({
                  pathname: '/todo/detail/edit',
                  query: {id: todo.id},
                })
              }}
              >
                編集
              </Button>
              <Link href={`/todo/${todo.id}`} passHref>
                <Button>
                  <a>
                    詳細
                  </a>
                </Button>
              </Link>
            </Flex>
          </Flex>
        </ListItem>
      }
    </>
  )
}

export default TodoListItem