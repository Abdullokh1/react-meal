import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import './Modal.css'
import ModalItem from './ModalItem/ModalItem'
import {arr} from '../../Products/Products'


export default function Modal(props) {
  return (
     <>
      <Backdrop show={props.show}/>
        <div className='modal-box' style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
           
           <div style={{opacity: props.modal ? '1' : '0', height: props.modal ? '200px' : '20px'}} className='d-flex flex-column  modal-inner-part  '>
             {arr.map((item, i) =>{
                if(props.data[item.type] > 0){
                  return <ModalItem
                  key={i} 
                  data={item} 
                  itemTotal={props.data[item.type]}
                  Increment={props.ExtraAdd}
                  Decrement={props.Delete}
                  />
                }
             })}
           </div>

          <div className='modal-inner'>
            <div className='d-flex mb-4 justify-content-between align-items-center'>
              <h3 className='text-black'>Total Amount</h3>
              <span className='price-info'>${props.total.toFixed(2)}</span>
            </div>
           
           <div className='modal-btn-wrapper d-flex'>
            <button onClick={props.closeModal} className='close-modal me-3'>Close</button>
            <button style={{display: props.addHandler ? 'flex' : 'none'}} className='close-modal submit-btn'>Order</button>
           </div>
          </div>
          {props.children}
        </div>
     </>
  )
}
