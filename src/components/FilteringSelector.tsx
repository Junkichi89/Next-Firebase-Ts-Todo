import { Select } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { todosFilter } from 'src/atoms/atom'

const FilteringSelector = () => {

  const [filter, setFilter] = useRecoilState(todosFilter)

  const handleFilterChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
  }
  return (
    <>
      <Select w="100px" value={filter} onChange={handleFilterChange}>
        <option value='all'>すべて</option>
        <option value='notStarted'>未着手</option>
        <option value='inProgress'>作業中</option>
        <option value='done'>完了</option>
      </Select>
    </>
  )
}

export default FilteringSelector