import {
  Container,
  Heading,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import React, { useEffect, useState, } from 'react'
import CreateTodoForm from 'src/components/createTodoForm'
import NewTodoForm from 'src/components/NewTodoForm'

interface Todo {
  id: string
  title: string
  status: string
}

const CreateTodo: React.FC = () => {



  return (
    <>
      <Container mt="200px" border="1px solid" borderRadius="5px" p="20px">
        <Heading pb="20px">Next Todo</Heading>
        <CreateTodoForm />
      </Container>
    </>
  )
}

export default CreateTodo
