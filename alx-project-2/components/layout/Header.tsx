import React from 'react'
import { HeaderProps } from '@/interfaces'

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Header
