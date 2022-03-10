import * as subscribers from '@/api/subscribers'
import { emitter } from '@/api/loaders'

const subscribersLoader = {
  load() {
    Object.keys(subscribers).forEach(key => {
      const subscriber = (subscribers as any)[key]
      Object.keys(subscriber).forEach(event => {
        emitter.on(event, subscriber[event])
      })
    })
  }
}

export default subscribersLoader