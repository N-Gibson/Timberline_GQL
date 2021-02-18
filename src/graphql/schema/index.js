import { gql } from 'apollo-server-express'

import reviewSchema from './review'

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

export default [linkSchema, reviewSchema]
