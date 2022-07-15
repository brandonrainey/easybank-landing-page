import React from 'react'
import Image from 'next/image'

export default function Intro({ isDesktop }) {
  return (
    <div className="introContainer">
      <div className="introWrapper">
        {/* next Image styling attempt */}
        {/* <div
          style={{
            height: isDesktop ? '100%' : 423,
            width: isDesktop ? '' : '100%',
            position: 'relative',
          }}
        >
          <Image
            src={`${
              isDesktop ? '/bg-intro-desktop.svg' : '/bg-intro-mobile.svg'
            }`}
            layout="fill"
            objectFit={isDesktop ? 'fill' : 'contain'}
            style={{
              marginTop: isDesktop ? '' : '',
              marginLeft: isDesktop ? 350 : '',
            }}
            alt="background design image"
          />
        </div> */}
        <img
          src={`${
            isDesktop ? '/bg-intro-desktop.svg' : '/bg-intro-mobile.svg'
          }`}
          width={`100%`}
          height={`${isDesktop ? '100%' : '423'}`}
          className="introbg"
          alt="background design image"
        />
        {/* next Image styling attempt */}
        {/* <div
            style={{
              width: isDesktop ? '150%' : '100%',
              height: isDesktop ? '100%' : '423',
              position: 'absolute',
              top: isDesktop ? -20 : -400,
              right: isDesktop ? -420 : 0,
              bottom: 0,
              left: isDesktop ? 0 : 0,
              overflowX: 'hidden',
            }}
          >
            <Image
              src="/image-mockups.png"
              layout="fill"
              className="introMockup"
              objectFit="contain"
              alt="phone mockups image"
            />
          </div> */}
        <div className="mockupWrapper">
          <img
            src="/image-mockups.png"
            width={`${isDesktop ? '' : '100%'}`}
            height={`${isDesktop ? '100%' : '423'}`}
            className="introMockup"
            alt="phone mockups image"
          />
        </div>
      </div>
      <div className="introInfo">
        <h2>Next generation digital banking</h2>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className='requestButton'>Request Invite</button>
      </div>
    </div>
  )
}
