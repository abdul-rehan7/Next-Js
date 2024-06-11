import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <ul className='flex p-[1%] space-x-10 '>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href='/contact'>Contact</Link>
    
      </ul>
    </div>
  )
}

export default Navbar
