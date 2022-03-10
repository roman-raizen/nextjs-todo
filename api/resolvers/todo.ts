import { Context } from '@/api/loaders/context'
import { ITodoDocument } from '@/api/models/todo'
import { UserInputError } from 'apollo-server-errors'

export type TodosInput = {
}

export type CreateTodoInput = {
  input: {
    title: string
  }
}

export type DeleteTodoInput = {
  input: {
    id: string
  }
}

export type CompleteTodoInput = {
  input: {
    id: string
  }
}

export type UncompleteTodoInput = {
  input: {
    id: string
  }
}

const todoResolver = {
  Query: {
    todos: async (_: any, __: TodosInput, { services }: Context): Promise<ITodoDocument[]> => {
      return await services.Todo.list()
    }
  },
  Mutation: {
    createTodo: async (_: any, { input }: CreateTodoInput, { services }: Context): Promise<ITodoDocument> => {
      const todo = await services.Todo.create(input)
      return todo
    },
    deleteTodo: async (_: any, { input }: DeleteTodoInput, { services }: Context): Promise<ITodoDocument> => {
      const todo = await services.Todo.delete(input.id)

      // throw an error if todo not found
      if (!todo) {
        throw new UserInputError('Todo not found')
      }

      return todo
    },
    completeTodo: async (_: any, { input }: CompleteTodoInput, { services }: Context): Promise<ITodoDocument> => {
      const todo = await services.Todo.complete(input.id)

      // throw an error if todo not found
      if (!todo) {
        throw new UserInputError('Todo not found')
      }

      return todo

    },
    uncompleteTodo: async (_: any, { input }: UncompleteTodoInput, { services }: Context): Promise<ITodoDocument> => {
      const todo =  await services.Todo.uncomplete(input.id)

      // throw an error if todo not found
      if (!todo) {
        throw new UserInputError('Todo not found')
      }

      return todo
    },
  }
}

export default todoResolver