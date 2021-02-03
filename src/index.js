import express from 'express'
import { ApolloServer } from 'apollo-server-express'

const app = express()

const schema = {}
const resolvers = {}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server running on https://localhost:8080/graphql')
})
