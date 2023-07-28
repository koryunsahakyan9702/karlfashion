import React from 'react'
import "./Body.scss"
import {AiOutlineClose} from "react-icons/ai"
import {Modal,Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
export default function ({modalArr,modalShow,setModalShow}) {
  return (
    <Modal
    show={modalShow}
    size="lg"
    aria-labelledby="false"
    centered
  >
    <Modal.Header closeButton onClick={()=>{
      setModalShow(false)
    }}
    style={{border:"none",
      
    }}>
      <Modal.Title id="contained-modal-title-vcenter"
        style={{border:"none",
        width:"1px"
      }}
      >
      </Modal.Title>
    </Modal.Header>
    <Modal.Body style={{
      height:"600px",
      border:"none",
      margin:"0",}}>
        <div className="contModal">
        <div className="imgDiv">
            <img src={modalArr.image}/>
        </div>
        <div className="modalDes">
          <h4>{modalArr.title}</h4>
          <h5>{modalArr.price} $</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias tempore voluptates minus dolor eos reiciendis quidem ab laudantium. Eaque!</p>
          <a href='#'>View Full Product Details</a>
        </div>
        </div>
    </Modal.Body>
    
  </Modal>
   
  )
}
