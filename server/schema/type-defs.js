const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
        favouriteMovies: [Movie!]
    }

    type Movie {
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }

    type Query {
        getAllUsers: [User!]!
        getUser(id: ID!): User
        movies: [Movie!]!
        movie(name: String!): Movie!
    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality
    }

    input UpdateUserInput {
        id: ID!
        name: String
        newUsername: String
        age: Int
        nationality: String
    }

    type Mutation {
        createUser(input: CreateUserInput!): User
        updateUser(xinput: UpdateUserInput!): User
        deleteUser(id: ID!): User
    }

    enum Nationality {
        FRANCE
        BRAZIL
        USA
    }
`;

module.exports = { typeDefs };
