import {
  Container,
  Heading,
} from '@chakra-ui/react'
import React, { useEffect, useState, } from 'react'
import { useRouter } from "next/router"
import { useRecoilValue } from 'recoil'
import { todosState } from 'src/atoms/atom'
import EditForm from 'src/components/EditForm'

const EditTodo: React.FC = () => {
  const todos = useRecoilValue(todosState)
  const router = useRouter()
  const item = todos.filter((todo) => todo.id === router.query.id)
  const todo = item[0]
  return (
    <>
      <Container mt="200px" border="1px solid" borderRadius="5px" p="20px">
        <Heading pb="20px">Edit Todo</Heading>
        <EditForm todo={todo} />
      </Container>
    </>
  )
}

export default EditTodo
