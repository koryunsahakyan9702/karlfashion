import React from 'react'
import "./LeftMenu.scss"
import {AiOutlineClose} from "react-icons/ai"
import WomeanCat from './WomeanCat'

export default function LeftMenu({hidMenu,show}) {
  return (
    <div className={show?"categories":"catHidden"}>
       <div className="but"> <AiOutlineClose onClick={hidMenu} size={25} color='white'/></div>
       <p className='text_cat'>Categories</p>
       <WomeanCat/>
     </div>
    
  )
}
