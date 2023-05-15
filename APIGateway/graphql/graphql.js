import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from "graphql";

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */

// Project Type
const TaskType = new GraphQLObjectType({
  name: "Task",
  fields: () => ({
    _id: { type: GraphQLID },
    text: { type: GraphQLString },
    complete: { type: GraphQLBoolean },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    tasks: {
      type: new GraphQLList(TaskType),
      async resolve(parent, args) {
        const url = "http://localhost:5002/DisplayTasks";
        let response = await fetch(url, {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        var tasks = await response.json();
        return tasks;
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Add a client
    addTask: {
      type: TaskType,
      args: {
        text: { type: GraphQLNonNull(GraphQLString) },
        complete: { type: GraphQLNonNull(GraphQLBoolean) },
      },
      async resolve(parent, args) {
        const url = "http://localhost:5001/Tasks";
        let response = await fetch(url, {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            "text": args.text,
            "complete": args.complete,
          }),
        });
        var task = await response.json();
        return task;
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation
});
