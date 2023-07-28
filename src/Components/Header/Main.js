import React from 'react'
import "./Main.scss"
import Social from './Social'
import MainMenu from './MainMenu'
import { Link } from 'react-router-dom'
import {TfiHeadphoneAlt} from "react-icons/tfi"
export default function Main() {
  return (
    <div className="main_side">
        <Social/>
        <MainMenu/>
        <div className="telephone">
         <Link className='tel_link'><TfiHeadphoneAlt/> +34 657 3556 778</Link>
        </div>
    </div>
  )
}
