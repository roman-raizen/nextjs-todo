import { useMutation, gql, MutationResult } from '@apollo/client'
import { TODOS_QUERY } from './queryTodos'
import { ITodo } from '../components/Todos'

export interface IDeleteTodo {
  (id: string): Promise<any>
}

export type IUseDeleteTodo = [IDeleteTodo, MutationResult]

export const DELETE_TODO_MUTATION = gql`
  mutation deleteTodo($input: DeleteTodoInput!) {
    deleteTodo(input: $input) {
      id
    }
  }
`

const useDeleteTodo = (): IUseDeleteTodo => {
  const [deleteTodo, ...rest] = useMutation(DELETE_TODO_MUTATION)

  const del = (id: string) => {
    return deleteTodo({
      variables: { input: { id } },
      update: (cache, { data: { deleteTodo } }) => {
        const { todos }: any = cache.readQuery({ query: TODOS_QUERY })
        cache.writeQuery({
          query: TODOS_QUERY,
          data: { todos: todos.filter((todo: ITodo) => todo.id !== deleteTodo.id) }
        })
      },
      optimisticResponse: {
        __typename: 'Mutation',
        deleteTodo: {
          __typename: 'Todo',
          id,
        },
      },
    })
  }

  return [del, ...rest]
}

export default useDeleteTodo