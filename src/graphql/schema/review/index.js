import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    review(id: ID!): Review
  }

  extend type Mutation {
    addReview(name: String!, rating: Number!, reviewContent: String!): Review!
  }

  type Review {
    id: ID!
    name: String!
    rating: Number!
    reviewContent: String!
  }
`
