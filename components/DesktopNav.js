import React, { useState } from 'react'

export default function DesktopNav() {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className='desktopNavContainer'>
        <nav className='desktopNav'>
            <a>Home</a>
            <a>About</a>
            <a>Contact</a>
            <a>Blog</a>
            <a>Careers</a>
        </nav>
        <button>
            Request Invite
        </button>
    </div>
  )
}
