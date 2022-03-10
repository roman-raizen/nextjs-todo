import { FC } from 'react'
import { ReloadIcon } from '@modulz/radix-icons'
import { motion, AnimatePresence } from 'framer-motion'

const TodosLoader: FC<{}> = () => {
  return (
    <AnimatePresence initial={false}>
      <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 1 }} className="flex h-48 bg-white rounded-md shadow-sm">
        <ReloadIcon className="w-10 h-10 m-auto text-slate-300 animate-spin" />
      </motion.div>
    </AnimatePresence>
  )
}

export default TodosLoader