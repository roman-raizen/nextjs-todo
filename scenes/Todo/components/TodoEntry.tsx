import { FC } from 'react'
import { TrashIcon } from '@modulz/radix-icons'
import TodoIcon from './TodoIcon'

export interface ITodoEntryComponent {
  id: string
  title: string
  completed: boolean
  loading: boolean
  onCheck: () => void
  onDelete: () => void
}

const TodoEntry: FC<ITodoEntryComponent> = ({ id, title, completed, onCheck, onDelete, loading }) => {
  return (
    <div className="flex items-center justify-between transition-all bg-white rounded-md group hover:scale-105 hover:shadow-sm">
      <div className="p-5 cursor-pointer grow-0" onClick={onCheck}>
        <TodoIcon completed={completed} loading={loading} />
      </div>
      <div className="p-5 pl-0 overflow-hidden cursor-pointer grow whitespace-nowrap" onClick={onCheck}>{title}</div>
      <div className='invisible p-5 transition-transform rounded-full cursor-pointer group-hover:visible hover:scale-150 hover:text-red-500 text-slate-400' onClick={onDelete}>
        <TrashIcon className='w-3 h-3 '/>
      </div>
    </div>
  )
}

export default TodoEntry
