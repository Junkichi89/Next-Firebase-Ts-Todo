import { Select } from '@chakra-ui/react'

const FilteringSelector = ({ filter, onChange }) => {

  return (
    <>
      <Select w="100px" value={filter} onChange={onChange}>
        <option value='all'>すべて</option>
        <option value='notStarted'>未着手</option>
        <option value='inProgress'>作業中</option>
        <option value='done'>完了</option>
      </Select>
    </>
  )
}

export default FilteringSelector