import { ITodo } from "../components/Todos"

const sortTodos = (todos: ITodo[]): ITodo[] =>  {
  // sort todos by completed and by createdAt

  return [...todos].sort((a: ITodo, b: ITodo) => {
    if (a.completed === b.completed) {
      return b.createdAt - a.createdAt
    }

    return a.completed ? 1 : -1
  })
}

export default sortTodos