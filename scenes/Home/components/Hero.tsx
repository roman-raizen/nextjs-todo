import { FC, ReactNode } from 'react'

interface HeroProps {
  children: ReactNode
}

const Hero: FC<HeroProps> = ({ children }): JSX.Element => {
  return (
    <div className='flex h-screen text-5xl font-bold text-slate-800'>
      <div className='m-auto'>
        {children}
      </div>
    </div>
  )
}

export default Hero
