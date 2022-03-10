import { graphqlMiddleware } from "@/api/loaders"

export default graphqlMiddleware

export const config = {
  api: {
    bodyParser: false,
  },
}
