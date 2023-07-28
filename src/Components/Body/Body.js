import React, { useEffect, useState } from 'react'
import "./Body.scss"
import { Data } from '../../Data'
import { Link } from 'react-router-dom'
import BodyImg from './BodyImg'
import { useInView } from 'react-intersection-observer'

export default function Body({setCartProd,cartProd}) {
    const[data,setData]=useState(Data)
    const[lin,setLin]=useState("all")
    const [active,setActive]=useState(false)

    const catlinks=Object.keys(data)
    const [xref,inView]=useInView({
        threshold:1.0
    })
    useEffect(()=>{
        if(inView){
            setActive(true)
        }
        else{
            setActive(false)
        }
    },[inView])
  return (
    <div className="body">
        <div className="bodyTitle"><h2>New Arrivals</h2></div>
        <div className="bodyCat">
            {catlinks.map((link,index)=>{
                return <Link className='catLink' key={index}
                    onClick={()=>{
                        setLin(link)
                    }}
                >{link}
                </Link>
            })}
            
        </div>
        <div ref={xref} className="scrollDiv"></div>
        <BodyImg arr={data[lin]} cartProd={cartProd} setCartProd={setCartProd} active={active}/>
        
    </div>
  )
}
