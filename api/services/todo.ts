import { ITodoDocument } from '@/api/models/todo'
import { IServiceContext } from '@/api/services'

export type CreateTodoParams = {
  title: string
}

export interface ITodoService {
  list(): Promise<ITodoDocument[]>
  create(input: CreateTodoParams): Promise<ITodoDocument>
  update(id: string, input: CreateTodoParams): Promise<ITodoDocument|null>
  delete(id: string): Promise<ITodoDocument|null>
  complete(id: string): Promise<ITodoDocument|null>
  uncomplete(id: string): Promise<ITodoDocument|null>
}

const todo = ({ models, emit }: IServiceContext): ITodoService => ({
  async list() {
    return await models.Todo.find({}).sort({ completed: 1, createdAt: -1 })
  },
  async create(input: CreateTodoParams) {
    return await models.Todo.create(input)
  },
  async update(id: string, input: CreateTodoParams) {
    return await models.Todo.findByIdAndUpdate(id, input)
  },
  async delete(id: string) {
    return await models.Todo.findByIdAndDelete(id)
  },
  async complete(id: string) {
    const result = await models.Todo.findByIdAndUpdate(id, { completed: true }, { new: true })
    // emit('todo.completed', result)
    return result
  },
  async uncomplete(id: string) {
    return await models.Todo.findByIdAndUpdate(id, { completed: false }, { new: true})
  },
})


export default todo