import { ApolloServer } from "apollo-server";

import { schema } from "./schema";

import { context } from "./context";  

export const server = new ApolloServer({
    schema,
    context,
});

const port = 4000;
// 2
server.listen((process.env.PORT || port)).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});