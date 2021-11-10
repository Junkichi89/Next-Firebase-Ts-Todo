import {
  Container,
  Heading,
} from '@chakra-ui/react'
import React from 'react'
import CreateTodoForm from 'src/components/createTodoForm'



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
