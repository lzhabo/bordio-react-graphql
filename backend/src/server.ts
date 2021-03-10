import express from "express";
import { graphqlHTTP } from "express-graphql";
import * as graphql from "graphql";
import { hasher } from "./utils";
import Database from "./database";
import { IUser } from "./interfaces";
import cors from "cors";
import { mongoUrl, port } from "./config";

const database = new Database(mongoUrl);

const userFields = {
  id: { type: graphql.GraphQLString },
  name: { type: graphql.GraphQLString },
  email: { type: graphql.GraphQLString },
  country: { type: graphql.GraphQLString },
  gender: { type: graphql.GraphQLString },
  terms: { type: graphql.GraphQLBoolean },
};

// Define the User type
const userType = new graphql.GraphQLObjectType({
  name: "User",
  fields: userFields,
});

const queryType = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: userType,
      args: { email: userFields.email },
      resolve: (_, { id }) => database.findUser(id),
    },
    users: {
      type: new graphql.GraphQLList(userType),
      resolve: async () => Object.values(await database.users()),
    },
    userEmail: {
      type: userType,
      args: { email: userFields.email },
      resolve: (_, { email }) => database.findUserByEmail(email),
    },
    register: {
      type: userType,
      args: {
        password: { type: graphql.GraphQLString },
        name: userFields.name,
        email: userFields.email,
        country: userFields.country,
        gender: userFields.gender,
        terms: userFields.terms,
      },
      resolve: async (_, { password, ...args }) => {
        const hash = hasher(password);
        console.log(password);
        console.log(hash);
        return await database.createUser({ ...args, ...hash } as Omit<IUser, "_id">);
      },
    },
  },
});

const schema = new graphql.GraphQLSchema({ query: queryType });

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port ?? 4000, () => {
  console.log("🚀 Server ready at: http://localhost:" + port);
  console.log("Running a GraphQL API server at localhost:4000/graphql");
});
