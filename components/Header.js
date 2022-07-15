import React, { useState } from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

export default function Header({ isDesktop }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="header">
      <Image
        src="/logo.svg"
        width={`173.75`}
        height={`25`}
        className="logo"
        alt="easybank logo"
      />
      {isDesktop ? (
        <DesktopNav />
      ) : (
        <img
          src={`${open ? '/icon-close.svg' : '/icon-hamburger.svg'}`}
          height={`${open ? '27' : '15'}`}
          width={`${open ? '25' : '32.7'}`}
          className="hamburgerIcon"
          onClick={() => setOpen(!open)}
        />
      )}

      {open ? <MobileNav /> : null}
    </div>
  )
}
