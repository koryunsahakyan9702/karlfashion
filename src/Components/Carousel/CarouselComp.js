import React from 'react'
import "./CarouselComp.scss"
import Carousel from "nuka-carousel"

export default function CarouselComp() {
  
  
  return (
    <div className="carousel" >
      
        <Carousel   wrapAround={true} autoplay={true} autoplayInterval={5000}>
          <div className="imgCar1">
            <div className="carpos">
            <h6 className="carItem1">* Only today we offer free shipping</h6>
            <h2 className="carBig1"> Fashion Trends</h2>
            <a href="#" className="carButt1">SHOP NOW</a>

            </div>
          </div>
          <div className="imgCar2">
          <div className="carpos">

          <h6 className="carItem2">* Only today we offer free shipping</h6>
          <h2 className="carBig2">Summer collections</h2>
          <a href="#" className="carButt2">CHECK COLLECTION</a>
          </div>
          </div>
          <div className="imgCar3">
          <div className="carpos">

          <h6 className="carItem3">* Only today we offer free shipping</h6>
          <h2 className="carBig3">Women Fashion</h2>
          <a href="#" className="carButt3">CHECK COLLECTION</a>
          </div>
          </div>
        </Carousel>
    </div>
  )
}
