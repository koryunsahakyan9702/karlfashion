import React, { useEffect, useState } from 'react'
import "./Body.scss"
import { Link } from 'react-router-dom'
import {BsPlusCircle} from "react-icons/bs"
import ModalDesc from './ModalDesc'
export default function BodyImg({arr,setCartProd,cartProd,active}) {
    const [modalShow, setModalShow]=useState(false)
    const [modalArr,setModalArr]=useState([])
    
    
    function handleclick(obj){
        if(cartProd.find((prod)=>{
         return prod.id===obj.id
        })){
            setCartProd(cartProd.filter((pr)=>{
                return pr.id!==obj.id
            }))
        }
        else{
            setCartProd([...cartProd,obj])
        }
    }
    function handleclick3(obj){
        return setModalArr(obj), setModalShow(true)
    }
    function handleclick2(obj){
        if(cartProd.find((prod)=>{
         return prod.id===obj.id
        })){
            return "REMOVE TO CART"
        }
        else{
            return "ADD TO CART"
        }
    }
    
  return (
    <div  className='bodyImg'>
        
        {arr.map((img)=>{
            return <div  className={`bodyItem ${active?"active":""}`} key={img.id} >
                
           
            <div className="overlay" >
                
            <BsPlusCircle className='butImg'  size={100}
                onClick={()=>{handleclick3(img)}}
            />
                
            
            </div>
           <div className="pic"> <img src={img.image} key={img.id}/></div>
           
            <div className="desc">
            <h4 className="price">{img.price}$</h4>
            <p className="title">{img.title}</p>
            </div>
            <Link className='linkitem' onClick={()=>{handleclick(img)}}>{handleclick2(img)}</Link>
            </div>
            
        })}
        <ModalDesc modalArr={modalArr} modalShow={modalShow} setModalShow={setModalShow}/>
    </div>
  )
}
