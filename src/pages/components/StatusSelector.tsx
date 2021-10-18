import React from 'react'
import { Select } from '@chakra-ui/react'
import { doc, collection, setDoc } from '@firebase/firestore'
import { db } from 'src/lib/firebase'

const StatusSelector: React.FC<any> = ({ todo }) => {

  const todosRef = collection(db, 'todos')
  const handleStatusChange = async ({ id }: any, e: React.ChangeEvent<HTMLSelectElement>) => {
    await setDoc(
      doc(todosRef, id),
      {
        status: e.target.value,
      },
      { merge: true }
    )
  }
  return (
    <>
      {todo &&
        <Select
          w="100px"
          value={todo.status}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleStatusChange(todo, e)}
        >
          <option value='notStarted'>未着手</option>
          <option value='inProgress'>作業中</option>
          <option value='done'>完了</option>
        </Select>
      }
    </>
  )
}

export default StatusSelector