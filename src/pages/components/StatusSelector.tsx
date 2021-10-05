import { Select } from '@chakra-ui/react'

const StatusSelector = ({ todo, onChange }) => {

  return (
    <>
      <Select
        w="100px"
        value={todo.status}
        onChange={(e) => onChange(todo, e)}
      >
        <option value='notStarted'>未着手</option>
        <option value='inProgress'>作業中</option>
        <option value='done'>完了</option>
      </Select>
    </>
  )
}

export default StatusSelector