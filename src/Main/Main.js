import React from 'react'
import Products from '../components/Products/Products'
import './Main.css'

export default function Main(props) {
  return (
    <>
     <section className='main-section'>
       <div>
         <img className='main-img' src="https://react-app099.netlify.app/static/media/meals.2971f633.jpg" alt="main-img" />
       </div>
       <div className='d-flex main-content flex-column align-items-center'>
         <h3 className='mb-4 main-title'>Delicious Food, Delivered To You</h3>
         <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
         <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
       </div>
      <div className='container'>
        <Products allproduct={props.AllProducts} addHandler={props.add}/>
      </div>

     </section>

    </>
  )
}
