const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./gql/schema");
const resolvers = require("./gql/resolver");
require("dotenv").config({ path: ".env" });

mongoose.set("strictQuery", false);

mongoose.connect(process.env.BBDD, (err, _) => {
  if (err) {
    console.log("Connection error", err);
  } else {
    server();
  }
});

const server = () => {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers,
  });

  serverApollo.listen().then(({ url }) => {
    console.log("server on in: ", url);
  });
};
