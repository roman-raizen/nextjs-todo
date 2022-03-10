import { useMutation, gql, MutationResult } from '@apollo/client'
import { TODOS_QUERY } from './queryTodos'
import sortTodos from '../common/sortTodos'

export interface ICompleteTodo {
  (id: string): Promise<any>
}

export type IUseCompleteTodo = [ICompleteTodo, MutationResult]

export const COMPLETE_TODO_MUTATION = gql`
  mutation completeTodo($input: CompleteTodoInput!) {
    completeTodo(input: $input) {
      id
      completed
    }
  }
`

const useCompleteTodo = (): IUseCompleteTodo => {
  const [completeTodo, ...rest] = useMutation(COMPLETE_TODO_MUTATION)

  const complete = (id: string) => {
    return completeTodo({
      variables: { input: { id } },
      update: (cache) => {
        const { todos }: any = cache.readQuery({ query: TODOS_QUERY })

        // sort todos by completed
        cache.writeQuery({
          query: TODOS_QUERY,
          data: { todos: sortTodos(todos) }
        })

      },
      optimisticResponse: {
        __typename: 'Mutation',
        completeTodo: {
          __typename: 'Todo',
          completed: true,
          id,
        },
      },
    })
  }

  return [complete, ...rest]
}

export default useCompleteTodo