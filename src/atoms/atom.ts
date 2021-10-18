import { atom } from 'recoil'

interface Todo {
  id: string
  title: string
  status: string
}
export const todosState = atom<Todo[]>({ 
  key: 'todosState',
  default: [],
})

export const todosFilter = atom<string>({ 
  key: 'todosFilter',
  default: 'notStarted',
})