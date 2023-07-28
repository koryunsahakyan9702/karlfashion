import React, { useEffect, useState } from 'react'
import "./Sales.scss"
import { useInView } from 'react-intersection-observer'
export default function Sales() {
  const [active1,setActive1]=useState(false)
  const [ref,inView]=useInView({
    threshold:0.5
  })
  console.log(inView)
  useEffect(()=>{
    if(inView){
      return setActive1(true)
    }
    else return setActive1(false)
  },[inView])
  return (
    <div  className='salesBody'>
        <div ref={ref} className={`saleMon ${active1?"active1":""}`} >
          <h2>White t-shirt </h2>
          <span className="karl-lravel">HOT</span>
          <p>* Free shipping until 25 Dec 2017</p>
          <div className="offer">
            <h3>
              <span className="regular">$25.90</span>
              $15.90
            </h3>
          </div>
          <a href="#">Shop Now</a>

        </div>
    </div>
  )
}
