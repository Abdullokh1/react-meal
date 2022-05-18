import React from 'react'
import './Header.css'

export default function HeaderBtn(props) {
  return (
   <>
     <button onClick={props.modalSend} className='header__btn d-flex align-items-center'>
      <i className='bx header__icon me-2 bx-cart'></i>
      Your Cart
      <span className='header__count__btn ms-3'>{props.count}</span>
    </button>
   
   </>
  )
}
