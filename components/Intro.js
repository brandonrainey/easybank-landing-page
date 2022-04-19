import React from 'react'

export default function Intro() {
  return (
    <div>
        <div>
           <img 
            src='/bg-intro-mobile.svg'
            width={375}
            height={423}
            className='introbg'
            /> 
            <img 
                src='/image-mockups.png'
                width={375}
                height={423}
                className='introMockup'
            />

        </div>
        <div className='introInfo'>
            <h1>
                Next generation digital banking
            </h1>
            <p>
                Take your financial life online. Your Easybank account will be a one-stop-shop
                for spending, saving, budgeting, investing, and much more.
            </p>
            <button>
                Resquest Invite
            </button>
        </div>
        

    </div>
  )
}
