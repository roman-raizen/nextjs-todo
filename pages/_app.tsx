import type { AppProps } from 'next/app'
import { InMemoryCache, ApolloProvider, ApolloClient } from "@apollo/client"

import '@/styles/globals.css'

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache()
})


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
