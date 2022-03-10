import { ApolloServer } from "apollo-server-micro"

import resolvers from '@/api/resolvers'
import typeDefs from '@/api/schemas'
import context from '@/api/loaders/context'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})

export default apolloServer