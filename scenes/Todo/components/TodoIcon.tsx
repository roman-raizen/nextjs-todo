import { FC } from 'react'
import { CircleIcon, CheckCircledIcon, UpdateIcon } from '@modulz/radix-icons'

export interface ITodoIconComponent {
  completed: boolean
  loading: boolean
}

const TodoIcon: FC<ITodoIconComponent> = ({ completed, loading }): JSX.Element => {
  switch(true) {
    case loading: return <UpdateIcon className='w-5 h-5 text-slate-300 animate-spin' />
    case completed: return <CheckCircledIcon className='w-5 h-5 text-lime-500' />
    default: return <CircleIcon className='w-5 h-5 text-slate-400' />
  }
}

export default TodoIcon