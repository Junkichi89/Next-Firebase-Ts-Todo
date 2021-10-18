import { selector } from 'recoil'
import { todosFilter, todosState } from 'src/atoms/atom'

interface Todo {
  id: string
  title: string
  status: string
}

export const filteredTodosState = selector({
  key:'filteredTodosState',
  get: ({get}) => {
    const filter: string = get(todosFilter)
    const list :Todo[]= get(todosState)

    switch (filter) {
      case 'notStarted':
        return list.filter((item) => item.status === 'notStarted');
      case 'inProgress':
        return list.filter((item) => item.status === 'inProgress');
      case 'done':
        return list.filter((item) => item.status === 'done');
      default:
        return list;
    }
  }
})
