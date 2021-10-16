import { selector } from 'recoil'

import { todosFilter, todosState } from './atom'
export const filteredTodosState = selector({
  key:'filteredTodosState',
  get: ({get}) => {
    const filter = get(todosFilter)
    const list = get(todosState)

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