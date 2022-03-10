import { useMutation, gql, MutationResult } from '@apollo/client'
import { TODOS_QUERY } from './queryTodos'
import sortTodos from '../common/sortTodos'

export interface IUncompleteTodo {
  (id: string): Promise<any>
}

// export interface IUseUncompleteTodo extends Array<IUncompleteTodo | any> {}
export type IUseUncompleteTodo = [IUncompleteTodo, MutationResult]

export const UNCOMPLETE_TODO_MUTATION = gql`
  mutation uncompleteTodo($input: UncompleteTodoInput!) {
    uncompleteTodo(input: $input) {
      id
      completed
    }
  }
`

const useUncompleteTodo = (): IUseUncompleteTodo => {
  const [uncompleteTodo, ...rest] = useMutation(UNCOMPLETE_TODO_MUTATION)

  const uncomplete = (id: string) => {
    return uncompleteTodo({
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
        uncompleteTodo: {
          __typename: 'Todo',
          completed: false,
          id,
        },
      },
    })
  }

  return [uncomplete, ...rest]
}

export default useUncompleteTodo