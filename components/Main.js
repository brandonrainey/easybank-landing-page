import React from 'react'

export default function Main() {
  return (
    <div className='mainWrapper'>
        <div className='mainInfo'>
            <h2>
                Why choose Easybank?
            </h2>
            <p>
                We leverage Open Banking to turn your bank account into your financial hub.
                Control your finances like never before.
            </p>
        </div>

        <div className='cellWrapper'>
            <div className='mainCell'>
            <img 
                src='/icon-online.svg'
                width={72}
                height={72}
            />
            <h3>
                Online Banking
            </h3>
            <p>
                Our modern web and mobile applications allow you to keep track of your finances
                wherever you are in the world.
            </p>
            </div>

            <div className='mainCell'>
                <img src='icon-budgeting.svg'/>
                <h3>
                    Simple Budgeting
                </h3>
                <p>
                    See exactly where your money goes each month. Receive notifications when youreact
                    close to hitting your limits.
                </p>
            </div>

            <div className='mainCell'>
                <img src='icon-onboarding.svg'/>
                <h3>
                    Fast Onboarding
                </h3>
                <p>
                    We dont do branches. Open your account in minutes online and start taking control
                    of your finances right away.
                </p>
            </div>

            <div className='mainCell'>
                <img src='icon-api.svg'/>
                <h3>
                    Open API
                </h3>
                <p>
                    Manage your savings, investments, pension, and much more from one account. Tracking
                    your money has never been easier.
                </p>
            </div>
        </div>
        
    </div>
  )
}
