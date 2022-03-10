import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TodoEntry from './TodoEntry'

export interface ITodo {
  id: string
  title: string
  completed: boolean
  createdAt: number
  loading: boolean
}

export interface ITodosComponent {
  entries: [ITodo]
  onCheck: (id: string, completed: boolean) => void
  onDelete: (id: string) => void
  onSubmit: (title: string) => void
}

const Todos: FC<ITodosComponent> = ({ entries, onCheck, onDelete, onSubmit }) => {
  const [title, setTitle] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(title.length > 0 && title.length < 100) {
      setTitle('')
      onSubmit(title)
    }
  }

  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="p-5">
        <form onSubmit={handleSubmit}>
          <input value={title} type="text" className="w-full p-3 rounded-md" placeholder="Add a todo..." onChange={handleChange} />
        </form>
      </div>
      <ol>
        <AnimatePresence>
          { entries.map((entry: ITodo) => (
            <motion.li
              key={entry.id}
              layoutId={entry.id}
            >
              <motion.div
                initial={{ opacity: 0, y: '-150%', z: 5 }}
                animate={{ opacity: 1, y: 0, z: 0 }}
                exit={{ opacity: -1, y: '150%', z: 5 }}
              >
                <TodoEntry {...entry} onCheck={() => onCheck(entry.id, entry.completed)} onDelete={() => onDelete(entry.id)} />
              </motion.div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>
    </div>
  )
}

export default Todos