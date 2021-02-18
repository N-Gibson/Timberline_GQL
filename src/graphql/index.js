import { ApolloServer } from 'apollo-server-express'
import * as resolvers from './resolvers'
import typeDefs from './schema'

//Add config vars to apollo server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers: Object.values(resolvers),
})

export { apolloServer }
