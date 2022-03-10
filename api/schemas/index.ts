import { gql } from 'apollo-server'
import { default as scalars } from './scalars'
import { default as todo } from './todo'

const root = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

const schemas: any = [
  root,
  scalars,
  todo,
  // foo,
]

export default schemas