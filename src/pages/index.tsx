import {
  Container,
  Heading,
  InputGroup,
  Input,
  Flex,
  HStack,
  Button,
  Select,
  ListItem,
  Text,
  OrderedList
} from '@chakra-ui/react'
import TodoList from './components/TodoList'
import TodoListItem from './components/TodoListItem'
import EditTodoItem from './components/EditTodoItem'
import { useState, useEffect } from 'react'

const App = () => {
  /** Todoリスト */
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState('')
  const [todoId, setTodoId] = useState(0)
  const [filteredTodos, setFilteredTodos] = useState([])

  const [filter, setFilter] = useState('notStarted')
  const [isEditable, setIsEditable] = useState(false)
  const [editId, setEditId] = useState()
  const [newTitle, setNewTitle] = useState('')

  /** 作成フォームの状態制御 */
  const handleAddFormChanges = (e) => {
    setTodoTitle(e.target.value)
  } /** 編集フォームの状態制御 */

  const handleEditFormChanges = (e) => {
    setNewTitle(e.target.value)
  }

  /** 入力欄をリセット（空欄にする） */
  const resetFormInput = () => {
    setTodoTitle('')
  }

  /** 編集フォーム表示 */
  const handleOpenEditForm = ({ id, title }) => {
    setIsEditable(true)
    setEditId(id)
    setNewTitle(title)
  }

  /** 編集フォームを閉じる */
  const handleCloseEditForm = () => {
    setIsEditable(false)
    setEditId()
  }

  /** Todo新規作成 */
  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todoId, title: todoTitle, status: 'notStarted' },
    ])
    setTodoId(todoId + 1)
    resetFormInput()
  }

  /** Todo削除 */
  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo))
  }

  /** Todo編集 */
  const handleEditTodo = () => {
    const newTodos = todos.map((todo) => ({ ...todo }))

    setTodos(() => newTodos.map((todo) =>
      todo.id === editId ? { ...todo, title: newTitle } : todo
    ))
    setNewTitle('')
    handleCloseEditForm()
    setEditId()
  }

  /** Todoの状態変更 */
  const handleStatusChange = ({ id }, e) => {
    const newTodos = todos.map((todo) => ({ ...todo }))

    setTodos(
      newTodos.map((todo) =>
        todo.id === id ? { ...todo, status: e.target.value } : todo
      )
    )
  }

  /** Todoの絞り込みを検値 */

  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case 'notStarted':
          setFilteredTodos(
            todos.filter((todo) => todo.status === 'notStarted')
          )
          break
        case 'inProgress':
          setFilteredTodos(
            todos.filter((todo) => todo.status === 'inProgress')
          )
          break
        case 'done':
          setFilteredTodos(todos.filter((todo) => todo.status === 'done'))
          break
        default:
          setFilteredTodos(todos)
      }
    }
    filteringTodos()
  }, [filter, todos])

  return (
    <>
      <Container mt="200px" border="1px solid" borderRadius="5px" p="20px">
        <Heading pb="20px">Next Todo</Heading>
        {!isEditable ? (
          /* 新規作成フォーム */
          <>
            <InputGroup size="md" w="800px" px="20px">
              <Input
                type='text'
                size="md"
                w="200px"
                mr="20px"
                label='タイトル'
                placeholder="Enter Things to do"
                value={todoTitle}
                onChange={handleAddFormChanges}
              />
              <Button mr="20px" onClick={handleAddTodo}>作成</Button>
              <Select w="100px" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value='all'>すべて</option>
                <option value='notStarted'>未着手</option>
                <option value='inProgress'>作業中</option>
                <option value='done'>完了</option>
              </Select>
            </InputGroup>
          </>
        ) : (
          /* 編集フォーム */
          <>
            <InputGroup w="800px">
              <Input
                type='text'
                size="md"
                w="200px"
                mr="20px"
                label='新しいタイトル'
                value={newTitle}
                onChange={handleEditFormChanges}
              />
              <Button mr="20px" onClick={handleEditTodo}>編集を保存</Button>
              <Button mr="20px" onClick={handleCloseEditForm}>キャンセル</Button>
              <Select w="100px" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value='all'>すべて</option>
                <option value='notStarted'>未着手</option>
                <option value='inProgress'>作業中</option>
                <option value='done'>完了</option>
              </Select>
            </InputGroup>
          </>
        )}


        {/* Todoリスト */}
        <TodoList
          todos={filteredTodos}
          onChange={handleStatusChange}
          openEditForm={handleOpenEditForm}
          deleteTodo={handleDeleteTodo}
        />
      </Container>
    </>
  )
}

export default App
