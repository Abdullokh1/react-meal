import React from 'react'
import './Backdrop.css'

 const Backdrop = (props) => (
  props.show ? <div className='backdrop'></div> : null
 )
 
export default Backdrop;
