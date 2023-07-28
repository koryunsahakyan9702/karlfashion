import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'
import {FaPinterest} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa6"

export default function Footer() {
  return (
    <div className="footer">
        <div className="footerCon">
          <div className="footerLogo">
            <img src="https://preview.colorlib.com/theme/karl/img/core-img/logo.png.webp"  />
            <div className="corp">
              <p>
                Copyright ©2023 All rights reserved <br/>| This template is made with 
              </p>
               
            </div>
          </div>
          <div className="footerAbout">
            <div className="blog">
              <Link className='footLink'>About</Link>
              <Link className='footLink'>Blog</Link>
              <Link className='footLink'>Faq</Link>
              <Link className='footLink'>Returns</Link>
              <Link className='footLink'>Contact</Link>
            </div>
            <div className="account">
              <Link className='footLink'>My Account</Link>
              <Link className='footLink'>Shipping</Link>
              <Link className='footLink'>Our Policies</Link>
              <Link className='footLink'>Afiliates</Link>
            </div>
          </div>
          <div className="footerRegister">
            <h6>Subscribe to our newsletter</h6>
            <div className="butt">
            <input type="email" placeholder="Your email here"/>
            <button type='submit'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="socialDivs">
          <Link className="fac"><FaPinterest size={30}/></Link>
          <Link className="fac"><FaFacebookF size={30}/></Link>
          <Link className="fac"><BsTwitter size={30}/></Link>
          <Link className="fac"><FaLinkedinIn size={30}/></Link>
        </div>
    </div>
  )
}
