import React, { Component } from 'react'
import Main from '../../Main/Main'
import Header from '../Header/Header'
import Modal from '../UI/Modal/Modal'

export default class MealBuilder extends Component {
  state = {
    count: 0,
    price: 0,
    isClicked: false,
    isAdded: false,
    totalPrice: 0,
    itemCount: 1,
    

    AllProducts: [
      {
        id: 1,
        mealName: "Sushi",
        mealDesc: "Finest fish and veggies",
        mealPrice: 22.99,
      },
    
      {
        id: 2,
        mealName: "Schnitzel",
        mealDesc: "A german specialty!",
        mealPrice: 16.99,
      },
    
      {
        id: 3,
        mealName: "Barbecue Burger",
        mealDesc: "American, raw, meaty",
        mealPrice: 12.99,
      },
    
      {
        id: 4,
        mealName: "Green Bowl",
        mealDesc: "Healthy...and green...",
        mealPrice: 18.99,
      },
    ],

    newArr: []

  }

  addHandler = (e) =>{
    this.setState({count: this.state.count + 1})
    this.setState({isAdded: true})
    
  }
  

  addMealProduct = () =>{
    this.addHandler()
 }
 
 Increment = () =>{
   this.setState({itemCount: this.state.itemCount + 1})
   this.setState({count: this.state.count + 1})
 }

 Decrement = () =>{
  this.setState({itemCount: this.state.itemCount - 1})
  this.setState({count: this.state.count - 1})
}
 
  closeModal = () =>{
    this.setState({isClicked: false})
  }


  modalHandle = () =>{
    this.setState({isClicked: true})
  }


  render() {

    return (
      <>
       <Modal 
       show={this.state.isClicked}
       closeModal={this.closeModal}
       addHandler={this.state.isAdded}
       total={this.state.totalPrice}
       addMeal={this.addMealProduct}
       itemCount={this.state.itemCount}
       Increment={this.Increment}
       Decrement={this.Decrement}
       >
         
       </Modal>
       <Header 
       countHandle={this.state.count}
       modalHandler={this.modalHandle}
       />
       <Main AllProducts={this.state.AllProducts} add={this.addHandler}/>
      </>
    )
  }
}
