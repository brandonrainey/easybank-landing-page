import React from 'react'


export default function Intro({ isDesktop }) {

    

  return (
    <div className='introContainer'>
        <div className='introWrapper'>
           <img 
            src={`${isDesktop ? '/bg-intro-desktop.svg' : '/bg-intro-mobile.svg'}`}
            width={`100%`}
            height={`${isDesktop ? '100%' : '423'}`}
            className='introbg'
            /> 
            <div className='mockupWrapper'>
                <img 
                src='/image-mockups.png'
                width={`${isDesktop ? '' : '100%'}`}
                height={`${isDesktop ? '100%' : '423'}`}
                className='introMockup'
            /> 
            </div>
           

        </div>
        <div className='introInfo'>
            <h2>
                Next generation digital banking
            </h2>
            <p>
                Take your financial life online. Your Easybank account will be a one-stop-shop
                for spending, saving, budgeting, investing, and much more.
            </p>
            <button>
                Request Invite
            </button>
        </div>
        

    </div>
  )
}
