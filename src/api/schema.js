const resolvers = require("./resolvers")
const { makeExecutableSchema } = require("graphql-tools")

const usersAttr = `
    id: ID
    name: String!
    email: String!
    password: String!
`

const typeDefs = `
    type User {
        ${usersAttr}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    input UserInput {
        ${usersAttr}
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
