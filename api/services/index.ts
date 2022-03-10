import { ITodoModel } from '@/api/models/todo'

export { default as Todo } from "./todo"


export interface IServiceContext {
  models: {
    Todo: ITodoModel
  }
  common: any
  session: any
  emit: any
}