//const graphqlYoga = require("graphql-yoga")

import {GraphQLServer} from "graphql-yoga"
import resolvers from "./graphql/resolvers"
const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers:resolvers 
})

//GraphQL playground in local host : 4000
server.start(() => console.log("GraphQL Server Running..."))
