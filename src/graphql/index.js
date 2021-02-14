import { ApolloServer } from 'apollo-server-express'
import * as resolvers from './resolvers'

//Add config vars to apollo server
const apolloServer = new ApolloServer({
  resolvers: Object.values(resolvers),
})

export { apolloServer }
