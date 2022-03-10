import { useMutation, gql, MutationResult } from '@apollo/client'
import { TODOS_QUERY } from './queryTodos'

export interface ICreateTodoInput {
  title: string
}

export interface ICreateTodo {
  (input: ICreateTodoInput): Promise<any>
}

export type IUseCreateTodo = [ICreateTodo, MutationResult]

export const CREATE_TODO_MUTATION = gql`
  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      title
      completed
    }
  }
`

const useCreateTodo = (): IUseCreateTodo => {
  const [ createTodo, ...rest ] = useMutation(CREATE_TODO_MUTATION)

  const create = (input: any) => {
    const { title } = input
    return createTodo({
      variables: { input },
      update: (cache, { data: { createTodo } }) => {
        const { todos }: any = cache.readQuery({ query: TODOS_QUERY })
        cache.writeQuery({
          query: TODOS_QUERY,
          data: { todos: todos.concat([createTodo]) }
        })
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createTodo: {
          __typename: 'Todo',
          id: '',
          title,
          completed: false,
        },
      },
    })
  }

  return [ create, ...rest ]
}

export default useCreateTodo