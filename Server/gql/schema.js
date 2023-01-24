//Aqui se define los tipos que va a utilizar graphql
const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    siteWeb: String
    description: String
    password: String
    avatar: String
    createAt: String
  }

  type Token {
    token: String
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input loginValues {
    email: String!
    password: String!
  }

  type Query {
    #User
    getUser: User
  }

  type Mutation {
    #User
    register(values: UserInput): User
    login(values: loginValues): Token
  }
`;

module.exports = typeDefs;
