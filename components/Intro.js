import React from 'react'

export default function Intro() {
  return (
    <div>
        <div>
           <img 
            src='/bg-intro-mobile.svg'
            width={`100%`}
            height={423}
            className='introbg'
            /> 
            <img 
                src='/image-mockups.png'
                width={`100%`}
                height={423}
                className='introMockup'
            />

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
