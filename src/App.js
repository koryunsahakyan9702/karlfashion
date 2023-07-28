import './App.scss';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import LeftMenu from './Components/LeftMenu/LeftMenu';
import Single from './Components/SingleArea/Single';
import CarouselComp from './Components/Carousel/CarouselComp';
import Acsessories from './Components/Acsessories/Acsessories';
import Body from './Components/Body/Body';
import Sales from './Components/Sales/Sales';
import CommentCarusel from './Components/CommentCarusel/CommentCarusel';
import Footer from './Components/HeaderComp/Footer';

function App() {
const [show,setShow]=useState(false)
const [cartProd,setCartProd]=useState([])
function showMenu(){
  setShow(true)
}
function hidMenu(){
  setShow(false)
}
  return (
  <div className="general">
      <LeftMenu hidMenu={hidMenu} show={show}/>
      <div className={show?"Pas":"App"}>
      <Header showMenu={showMenu} cartProd={cartProd}/>
      <Single/>
      <CarouselComp/>
      <Acsessories/>
      <Body cartProd={cartProd} setCartProd={setCartProd}/> 
      <Sales/>
      <CommentCarusel/>
      <Footer/>
    </div>
  </div>
    
  );
}

export default App;
