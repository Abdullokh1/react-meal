import React from 'react'
import './Header.css'
import HeaderBtn from './HeaderBtn'

export default function Header(props) {
  return (
    <>
     <header className='header'>
       <div className="container">
         <div className="d-flex justify-content-between align-items-center">
           <h1 className='header__title'>React Meals</h1>
           <HeaderBtn modalSend={props.modalHandler} count={props.countHandle}/>
         </div>
       </div>
     </header>
    
    </>
  )
}
