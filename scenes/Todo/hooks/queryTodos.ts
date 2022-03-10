import { useQuery, useMutation, gql } from '@apollo/client'

export const TODOS_QUERY = gql`
  query {
    todos {
      id
      title
      completed
      createdAt
    }
  }
`

const useQueryTodos = () => {
  return useQuery(TODOS_QUERY)
}

export default useQueryTodos