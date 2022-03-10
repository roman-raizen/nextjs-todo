import Todos from './Todos'
import TodosLoader from './TodosLoader'
import TodosError from './TodosError'
import useQueryTodos from '../hooks/queryTodos'
import useCreateTodo from '../hooks/createTodo'
import useCompleteTodo from '../hooks/completeTodo'
import useUncompleteTodo from '../hooks/uncompleteTodo'
import useDeleteTodo from '../hooks/deleteTodo'

const TodosContainer = () => {

  const { loading, error, data } = useQueryTodos()
  const [createTodo] = useCreateTodo()
  const [completeTodo] = useCompleteTodo()
  const [uncompleteTodo] = useUncompleteTodo()
  const [deleteTodo] = useDeleteTodo()

  // if loading, show loading
  if (loading) return <TodosLoader />

  // if error, show error
  if (error) return <TodosError />

  const handleSubmit = (title: string) => {
    createTodo({ title })
  }

  const handleCheck = (id: string, completed: boolean) => {
    if (completed) {
      uncompleteTodo(id)
    } else {
      completeTodo(id)
    }
  }

  const handleDelete = (id: string) => {
    deleteTodo(id)
  }

  // if data, show todos
  if (data) {
    return (
      <Todos
        entries={data.todos}
        onCheck={handleCheck}
        onDelete={handleDelete}
        onSubmit={handleSubmit}
      />
    )
  }

  return null
}

export default TodosContainer