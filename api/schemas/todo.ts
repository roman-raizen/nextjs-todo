import { gql } from 'apollo-server'

export default gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    createdAt: Date!
  }

  input CreateTodoInput {
    title: String!
  }

  input UpdateTodoInput {
    id: ID!
    title: String!
  }

  input DeleteTodoInput {
    id: ID!
  }

  input CompleteTodoInput {
    id: ID!
  }

  input UncompleteTodoInput {
    id: ID!
  }

  extend type Query {
    todos: [Todo]
  }

  extend type Mutation {
    createTodo(input: CreateTodoInput!): Todo!
    updateTodo(input: UpdateTodoInput!): Todo!
    deleteTodo(input: DeleteTodoInput!): Todo!
    completeTodo(input: CompleteTodoInput!): Todo!
    uncompleteTodo(input: UncompleteTodoInput!): Todo!
  }

`