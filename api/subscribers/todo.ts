const todoSubscriber = {
  'todo.complete': (data: any) => {
    console.log('todo.complete', data)
  }
}

export default todoSubscriber