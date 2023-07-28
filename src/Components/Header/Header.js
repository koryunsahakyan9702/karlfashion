import React from 'react'
import "./Header.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import {TfiBag} from "react-icons/tfi"
import {AiOutlineMenu} from "react-icons/ai"
import Main from './Main';


export default function Header({showMenu,cartProd}) {
  const many =cartProd.reduce((arg,item)=>{
    return +item.price+arg
  },0)
  return (
    <header className="header">
      <div className="top_side">
        <div className="logo_cart">
          <div className="logo_div">
            <a href="#">
              <img src="https://preview.colorlib.com/theme/karl/img/core-img/logo.png.webp"/>
            </a>
          </div>
          <div className="cart_div">
            <div className="bag_menu">
              <div className="cart">
               <TfiBag size={25}/>
               {cartProd.length?<div className='count'>{cartProd.length}</div>:""}
                <span>Your Bag ${many}</span>
              </div>
              <div className="menu_cart">
                  <AiOutlineMenu size={25} color='white' onClick={showMenu}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Main/>
    </header>
  )
}
