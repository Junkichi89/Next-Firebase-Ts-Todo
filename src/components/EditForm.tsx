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
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { useRouter } from "next/router"

interface FormData {
  title: string
  detail: string
}

const EditForm:React.FC<any> = ({ todo }) => {
  const todosRef = collection(db, 'todos')
  const router = useRouter()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // 一緒にuserIDもTodoの中に登録させたい。
    await setDoc(doc(todosRef, todo.id),
      { title: data.title, detail: data.detail },
      { merge: true }
    )
    router.push('/')
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <label>タスク</label>
          <Input
            type="text"
            {...register("title", { required: true, min: 3, max: 20 })}
            defaultValue={todo.title}
          />
          <label>タスクの詳細</label>
          <Textarea
            placeholder="Please write about this task"
            {...register("detail")}
            defaultValue={todo.detail}
          />
          <Button bg={'lightBlue'} type="submit">Submit</Button>
        </VStack>
      </form>
    </>
  )
}

export default EditForm