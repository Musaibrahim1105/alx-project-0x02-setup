import React from 'react'
import { HeaderProps } from '@/interfaces/indesx'

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Header
