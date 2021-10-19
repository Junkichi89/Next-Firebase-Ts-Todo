import React, { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { query } from '@firebase/firestore'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { useRecoilState } from 'recoil'
import { todosState } from 'src/atoms/atom'
import { db } from 'src/lib/firebase'

interface PathParams {
  id: string
}

// ページコンポーネントに渡される props の型
// (Note) ページコンポーネント用の props であることを意識するために、
// 一般的な Props ではなく、PageProps という名前にしています。
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
    paths.push(`/todo/${doc.id}`)
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


const Todo: React.FC = ({ id }) => {

  const [todos, setTodos] = useRecoilState(todosState)
  const item = todos.filter((todo) => todo.id === id)
  console.log(todos)
  return (
    item.map(todo => (<>
      <div key="todo.id">{todo.title}</div>
    </>
    )
    ))
}

export default Todo