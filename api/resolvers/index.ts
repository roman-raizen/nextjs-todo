import { default as scalars } from './scalars'
import { default as todo } from './todo'

const root = {
  Query: {}, Mutation: {},
}

const resolvers: any = [
  root,
  scalars,
  todo,
  // foo,
]

export default resolvers