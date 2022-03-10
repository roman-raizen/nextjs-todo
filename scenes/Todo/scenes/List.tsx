import React from 'react'
import Accent from '@/components/Accent'
import Todos from '@/scenes/Todo/components/TodosContainer'

const List = () => {
  return (
    <div className="flex flex-col max-w-screen-sm m-auto">
      <div className="my-20">
        <div className="text-4xl font-bold tracking-wider text-center text-slate-600">Amazing <Accent>TODO</Accent></div>
        <div className="my-10">
          <Todos />
        </div>
      </div>
    </div>
  )
}

export default List