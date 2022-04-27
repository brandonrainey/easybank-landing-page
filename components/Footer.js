import React from 'react'

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerSectionOne">
        <img
          src="/icon-white.svg"
          width={208.5}
          height={30}
          className="footerIcon"
          alt="white easybank logo"
        />
        <div className="iconWrapper">
          <a href="https://www.facebook.com">
            <img
              src="/icon-facebook.svg"
              width={30}
              height={30}
              alt="facebook icon"
            />
          </a>

          <a href="https://www.youtube.com">
            <img
              src="/icon-youtube.svg"
              width={30}
              height={30}
              alt="youtube icon"
            />
          </a>

          <a href="https://www.twitter.com">
            <img
              src="/icon-twitter.svg"
              width={30}
              height={30}
              alt="twitter icon"
            />
          </a>

          <a href="https://www.pinterest.com">
            <img
              src="/icon-pinterest.svg"
              width={30}
              height={30}
              alt="pinterest icon"
            />
          </a>

          <a href="https://www.instagram.com">
            <img
              src="/icon-instagram.svg"
              width={30}
              height={30}
              alt="instagram icon"
            />
          </a>
        </div>
      </div>

      <div className="linkWrapper">
        <div className="linkSectionOne">
          <a>About Us</a>
          <a>Contact</a>
          <a>Blog</a>
        </div>

        <div className="linkSectionTwo">
          <a>Careers</a>
          <a>Support</a>
          <a>Privacy Policy</a>
        </div>
      </div>

      <div className="footerSectionThree">
        <button>Request Invite</button>
        <p>© Easybank. All Rights Reserved</p>
      </div>
    </div>
  )
}
