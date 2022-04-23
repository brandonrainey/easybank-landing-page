import React from 'react'

export default function Footer() {
  return (
    <div className='footerContainer'>

        <div className='footerSectionOne'>
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
        </div>
        


        <div className='linkWrapper'>
            <div className='linkSectionOne'>
               <a>About Us</a>
                <a>Contact</a>
                <a>Blog</a> 
            </div>
            
            <div className='linkSectionTwo'>
                <a>Careers</a>
                <a>Support</a>
                <a>Privacy Policy</a>
            </div>
            
        </div>

        <div className='footerSectionThree'>
            <button>Request Invite</button>
            <p>© Easybank. All Rights Reserved</p>
        </div>
        


    </div>
  )
}
