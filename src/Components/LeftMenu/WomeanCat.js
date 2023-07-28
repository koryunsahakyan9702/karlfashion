import React, { useState } from 'react'
import { Button, Fade } from 'react-bootstrap'
import {FcCollapse} from "react-icons/fc"
import {ImCheckboxUnchecked} from "react-icons/im"
import "./LeftMenu.scss"

export default function WomeanCat() {
    const [open,setOpen]=useState(false)
  return (
    <div className='womancat'>
           <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        className='woman_but'
      >
        <span className="woman_text"><ImCheckboxUnchecked className='rect' size={18} style={{background:open?"#ff084e":" #3a3a3a"}}/> Woman wear <FcCollapse className='arr' 
        style={{transform:open?"rotate(0deg)":"rotate(180deg)"}}/>
        </span>
      </Button>
      <Fade in={open}>
        <div>hello</div>
      </Fade>
    </div>
  )
}
