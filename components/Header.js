import React from 'react'
import Image from 'next/image'


export default function Header() {
  return (
    <div className='header'>
        <img 
          src='/logo.svg'
          width={`208.5`}
          height={`30`}
          className='logo'
        />
        <img
          src='/icon-hamburger.svg'
          height={`15`}
          width={`32.7`}
          className='hamburgerIcon'
        />

    </div>
  )
}
