import { atom } from 'recoil'
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface Todo {
  id: string
  title: string
  status: string
  detail: string
  uid?: string
}



export const todosState = atom<Todo[]>({ 
  key: 'todosState',
  default: [],
  effects_UNSTABLE: [persistAtom]
},
)

export const todosFilter = atom<string>({ 
  key: 'todosFilter',
  default: 'notStarted',
})
