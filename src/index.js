import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'

import config from './config'

const app = express()

app.use(cors())

const schema = {}
const resolvers = {}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

apolloServer.applyMiddleware({
  app,
  path: config.path || '/graphql',
})

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server running on https://localhost:8080/graphql')
})
