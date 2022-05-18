import React from 'react'

export default function ModalItem(props) {
  return (
   <>
   <div className='d-flex align-items-center modal-main-box'>
     <div className='product-item-modal me-5'>
        <h5 className="modal-product-name">{props.data.mealName}</h5>
        <span className="product-price modal-price">${props.data.mealPrice}</span>
      </div>
      <div className='modal-count'>
        <span className='modal-count-info'>X <span>{props.itemTotal}</span></span>
      </div>

      <div className='d-flex'>
        <button onClick={props.Increment} className='modal-count-btn'>+</button>
        <button onClick={props.Decrement} className='modal-count-btn'>-</button>
      </div>
   </div>
   
   </>
  )
}
