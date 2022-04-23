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
        >Home</a>
        <a 
        onClick={handleClick}
        className={`${navItem == 'About' ? 'navAbout' : ''}`}
        >About</a>
        <a 
        onClick={handleClick}
        className={`${navItem == 'Contact' ? 'navContact' : ''}`}
        >Contact</a>
        <a 
        onClick={handleClick}
        className={`${navItem == 'Blog' ? 'navBlog' : ''}`}
        >Blog</a>
        <a 
        onClick={handleClick}
        className={`${navItem == 'Careers' ? 'navCareers' : ''}`}
        >Careers</a>
      </nav>
      <button>Request Invite</button>
    </div>
  )
}
