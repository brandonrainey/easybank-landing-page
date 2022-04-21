import React, { useState } from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'


export default function Header() {

const [open, setOpen] = useState(false)

  return (
    <div className='header'>
        <img 
          src='/logo.svg'
          width={`173.75`}
          height={`25`}
          className='logo'
        />
        <img
          src='/icon-hamburger.svg'
          height={`15`}
          width={`32.7`}
          className='hamburgerIcon'
          onClick={() => setOpen(!open)}
        />

        {open ? <MobileNav /> : null}
    </div>
  )
}
