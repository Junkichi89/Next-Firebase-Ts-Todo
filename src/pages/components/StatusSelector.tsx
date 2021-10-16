import { Select } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { todosState } from '../atoms/atom'

const StatusSelector = ({ todo }) => {

  const [todos, setTodos] = useRecoilState(todosState)
  const handleStatusChange = ({ id }, e) => {
    const newTodos = todos.map((todo) => ({ ...todo }))

    setTodos(
      newTodos.map((todo) =>
        todo.id === id ? { ...todo, status: e.target.value } : todo
      )
    )
  }
  return (
    <>
      <Select
        w="100px"
        value={todo.status}
        onChange={(e) => handleStatusChange(todo, e)}
      >
        <option value='notStarted'>未着手</option>
        <option value='inProgress'>作業中</option>
        <option value='done'>完了</option>
      </Select>
    </>
  )
}

export default StatusSelector