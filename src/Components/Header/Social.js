import React from 'react'
import "./Main.scss"
import { Link, Routes } from 'react-router-dom'
import {GrPinterest} from "react-icons/gr"
import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"

export default function Social() {
  return (
    <div className='social'>
    <Link><GrPinterest color='black'/>
    <span className="karl-level">Share</span>
    </Link>
    <Link><BiLogoFacebook color='black'/></Link>
    <Link><AiOutlineTwitter color='black'/></Link>
    <Link><BiLogoLinkedin color='black'/></Link>

    </div>
  )
}
