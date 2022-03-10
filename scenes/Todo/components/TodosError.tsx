import { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TodosError: FC<{}> = () => {
  return (
    <AnimatePresence>
      <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 1 }} className="flex h-48 bg-white rounded-md shadow-sm">
        <p className="m-auto text-slate-400">You just broke my amazing TODO app :(</p>
      </motion.div>
    </AnimatePresence>
  )
}

export default TodosError