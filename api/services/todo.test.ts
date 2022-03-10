import todo from './todo'
import { ITodoModel } from '@/api/models/todo'

const models = {
  Todo: <ITodoModel>{}
}

const common = {}
const session = {}
const emit = jest.fn()

const service = todo({ models, emit, common, session })

describe('service.Todo', () => {
  describe('list', () => {
    beforeEach(() => {
      models.Todo.find = jest.fn().mockResolvedValue({
        sort: jest.fn().mockResolvedValue(Promise.resolve([])),
      })
    })
    it('should return a list of todos', async () => {
      const result = await service.list()
      expect(result).toEqual([])
    })
  })
})