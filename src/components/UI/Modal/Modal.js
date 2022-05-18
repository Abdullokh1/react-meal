import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import './Modal.css'

export default function Modal(props) {
  return (
     <>
      <Backdrop show={props.show}/>
        <div className='modal-box' style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
           
           <div className='d-flex modal-main-box  align-items-end'>
              <div className='product-item-modal me-5'>
                  <h5 className="modal-product-name">{props.mealName}</h5>
                  <span className="product-price modal-price">${props.mealPrice}</span>
              </div>
              <div className='modal-count'>
                <span className='modal-count-info'>X <span>{props.itemCount}</span></span>
              </div>

              <div className='d-flex'>
                <button onClick={props.Increment} className='modal-count-btn'>+</button>
                <button onClick={props.Decrement} className='modal-count-btn'>-</button>
              </div>
           </div>


          <div className='modal-inner'>
            <div className='d-flex mb-4 justify-content-between align-items-center'>
              <h3 className='text-black'>Total Amount</h3>
              <span className='price-info'>${props.total}</span>
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
