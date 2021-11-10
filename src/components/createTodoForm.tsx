import {
  InputGroup,
  Input,
  Button,
  VStack,
  Textarea,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import React, { ChangeEvent, useState } from 'react'
import { db } from '../lib/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useRouter } from "next/router"
import { useUser } from 'src/lib/auth'

interface FormData {
  title: string
  detail: string
}

const CreateTodoForm = () => {
  const user = useUser()
  const router = useRouter()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    await addDoc(collection(db, 'todos'), { title: data.title, detail: data.detail, status: 'notStarted', uid: user.uid })
      .then((docRef) => {
        console.log(docRef, "NewTodo has been added to Firebase")
      })
      .catch((e) => {
        console.error('Error adding document: ', e)
      })
      .finally(() => console.log('finally'))
    router.push('/')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <label>新しいタスク</label>
          <Input
            type="text"
            {...register("title", { required: true, min: 3, max: 20 })}
          />
          <label>タスクの詳細</label>
          <Textarea
            placeholder="Please write about this task"
            {...register("detail")}
          />
          <Button bg={'lightBlue'} type="submit">Submit</Button>
        </VStack>
      </form>
    </>
  )
}

export default CreateTodoForm