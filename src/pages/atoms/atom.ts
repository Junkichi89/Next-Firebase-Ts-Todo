import { atom } from 'recoil'

export const todosState = atom({ 
  key: 'todosState',
  default: [],
})

export const todosFilter = atom({ 
  key: 'todosFilter',
  default: 'notStarted',
})