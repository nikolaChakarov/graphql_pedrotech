const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server
    .listen()
    .then(({ url, port }) => {
        console.log(`Server is listening at port: ${port} at ${url}`);
    })
    .catch((err) => console.log(err));
