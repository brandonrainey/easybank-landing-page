import React, { useState } from 'react'

export default function DesktopNav() {
  const [navItem, setNavItem] = useState()

  function handleClick(e) {
    e.preventDefault()

    if (e.target.innerText == 'Home') {
      console.log('gwgww')
      setNavItem('Home')
    }
    if (e.target.innerText == 'About') {
      setNavItem('About')
    }
    if (e.target.innerText == 'Contact') {
      setNavItem('Contact')
    }
    if (e.target.innerText == 'Blog') {
      setNavItem('Blog')
    }
    if (e.target.innerText == 'Careers') {
      setNavItem('Careers')
    }
  }

  return (
    <div className="desktopNavContainer">
      <nav className="desktopNav">
        <a
          onClick={handleClick}
          className={`${navItem == 'Home' ? 'navHome' : ''}`}
          href=''
        >
          Home
        </a>
        <a
          onClick={handleClick}
          className={`${navItem == 'About' ? 'navAbout' : ''}`}
          href=''
        >
          About
        </a>
        <a
          onClick={handleClick}
          className={`${navItem == 'Contact' ? 'navContact' : ''}`}
          href=''
        >
          Contact
        </a>
        <a
          onClick={handleClick}
          className={`${navItem == 'Blog' ? 'navBlog' : ''}`}
          href=''
        >
          Blog
        </a>
        <a
          onClick={handleClick}
          className={`${navItem == 'Careers' ? 'navCareers' : ''}`}
          href=''
        >
          Careers
        </a>
      </nav>
      <button className='requestButton'>Request Invite</button>
    </div>
  )
}
