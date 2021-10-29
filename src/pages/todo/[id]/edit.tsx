import {
  Container,
  Heading,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import React, { useEffect, useState, } from 'react'
import CreateTodoForm from 'src/components/createTodoForm'
import NewTodoForm from 'src/components/NewTodoForm'
import { collection, getDocs } from 'firebase/firestore'
import { db } from 'src/lib/firebase'
import { GetStaticPaths } from 'next'
import { useRecoilValue } from 'recoil'
import { todosState } from 'src/atoms/atom'
import EditForm from 'src/components/EditForm'

interface PathParams {
  id: string
}

interface Todo {
  id: string
  title: string
  status: string
}



export const getStaticPaths: GetStaticPaths<any> = async () => {

  const todosRef = collection(db, 'todos')

  const data = await getDocs(todosRef)
  const paths: any[] = []
  data.forEach((doc) => {
    paths.push(`/todo/${doc.id}/edit`)
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id

  return {
    props: {
      id: id,
    },
  }
}

const EditTodo: React.FC = ({ id }: any) => {
  const todos = useRecoilValue(todosState)
  const item = todos.filter((todo) => todo.id === id)
  console.log(item)

  return (
    <>
      <Container mt="200px" border="1px solid" borderRadius="5px" p="20px">
        <Heading pb="20px">Edit Todo</Heading>
          <EditForm todo={item[0]}/>
      </Container>
    </>
  )
}

export default EditTodo
