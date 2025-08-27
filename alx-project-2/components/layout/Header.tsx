import React from 'react'
import { HeaderProps } from '@/interfaces'
import Link from 'next/link'

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Header
