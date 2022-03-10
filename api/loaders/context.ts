import * as models from '@/api/models'
import * as common from '@/api/common'
import * as services from '@/api/services'
import { emitter } from '@/api/loaders'

import { ITodoService } from '@/api/services/todo'
import { IServiceContext } from '@/api/services'

export interface Context {
  services: {
    Todo: ITodoService
  }
}

// type Resolver = (parent: any, args: any, context: Context) => any


const context = async ({ req }: any): Promise<Context|null> => {
  if(!req) return null

  const session = {}

  const serviceContext: IServiceContext = {
    models,
    common,
    session,
    emit: emitter.emit,
  }

  return  {
    services: {
      Todo: services.Todo(serviceContext),
    },
  }
}

export default context