import { FC, ReactNode } from 'react'

interface AccentProps {
  children: ReactNode,
}

const Accent: FC<AccentProps> = ({ children }): JSX.Element => {
  return (
    <span className="relative">
      <span className="absolute inset-0 bg-indigo-500 -rotate-3"></span>
      <span className="relative m-1 text-white">{children}</span>
    </span>
  )
}

export default Accent