import React from 'react'
import "./CommentCarusel.scss"
import Carousel from "nuka-carousel"


export default function CommentCarusel() {
  return (
    <div className="commentcar">
        <div className="commentcarDesc">
            <h2>Testimonials</h2>
        </div>
        <div className="carouselCom">
          <Carousel adaptiveHeight={true} autoplay wrapAround>
                <div className="carouselDiv">
                <span className="quote">"</span>    
                <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. </h6>
                <div className="imgDivCar">
                    <div className="imgdiv"><img src="https://preview.colorlib.com/theme/karl/img/bg-img/tes-1.jpg.webp"  /></div>
                   <div className="descModal"> 
                        <p>Michelle Williams</p>
                        <span>Client, Los Angeles</span>
                    </div>
                </div>
                </div>
                <div className="carouselDiv">
                <span className="quote">"</span>    
                <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. </h6>
                <div className="imgDivCar">
                    <div className="imgdiv"><img src="https://preview.colorlib.com/theme/karl/img/bg-img/tes-1.jpg.webp"  /></div>
                   <div className="descModal"> 
                        <p>Michelle Williams</p>
                        <span>Client, Los Angeles</span>
                    </div>
                </div>
                </div>
                <div className="carouselDiv">
                <span className="quote">"</span>    
                <h6>Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. </h6>
                <div className="imgDivCar">
                    <div className="imgdiv"><img src="https://preview.colorlib.com/theme/karl/img/bg-img/tes-1.jpg.webp"  /></div>
                   <div className="descModal"> 
                        <p>Michelle Williams</p>
                        <span>Client, Los Angeles</span>
                    </div>
                </div>
                </div>
                
          </Carousel>
        </div>
    </div>
  )
}
