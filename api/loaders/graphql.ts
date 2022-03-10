import type { NextApiRequest, NextApiResponse } from 'next'
import { apolloServer, mongoServer, subscribersLoader } from '@/api/loaders'

type Data = {
  name: string
}

// start required services
const apolloServerPromise = apolloServer.start()
const mongoServerPromise  = mongoServer.start()

// load data
subscribersLoader.load()

const graphql = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  await Promise.all([apolloServerPromise, mongoServerPromise])

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res)
}

export default graphql