import React from 'react'

export default function Footer() {
  return (
    <div className='footerContainer'>
        <img 
            src='/icon-white.svg'
            width={208.5}
            height={30}
            className='footerIcon'
        />
        <div className='iconWrapper'>
            <img 
                src='/icon-facebook.svg'
                width={30}
                height={30}
            />
            <img src='/icon-youtube.svg' width={30}
                height={30}/>
            <img src='/icon-twitter.svg' width={30}
                height={30}/>
            <img src='/icon-pinterest.svg' width={30}
                height={30}/>
            <img src='/icon-instagram.svg' width={30}
                height={30}/>
        </div>
        <div className='linkWrapper'>
            <a>About Us</a>
            <a>Contact</a>
            <a>Blog</a>
            <a>Careers</a>
            <a>Support</a>
            <a>Privacy Policy</a>
        </div>
        <button>Request Invite</button>
        <p>© Easybank. All Rights Reserved</p>
    </div>
  )
}
