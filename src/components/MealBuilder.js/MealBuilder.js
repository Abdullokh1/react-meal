import React, { Component } from 'react'
import Main from '../../Main/Main'
import Header from '../Header/Header'
import Modal from '../UI/Modal/Modal'


let productPrice = {
  sushi: 22.99,
  german: 16.99,
  american: 12.99,
  greenBowl: 18.99
}

export default class MealBuilder extends Component {
  state = {
    count: 0,
    price: 0,
    isClicked: false,
    isAdded: false,
    totalPrice: 0,
    total: 0,
    modal: false,
    itemCount: 1,
    
    products: {
      sushi: 0,
      german: 0,
      american: 0,
      greenBowl: 0,
    },
  }


  newNumber = (products) => {
    let newTotal = Object.keys(products).map((item, index) => {
      return products[item];
    }).reduce((newTotal, el) => {
      return newTotal + el;
    }, 0);

    this.setState({
      total : newTotal
    })
  }

  addHandler = (type) =>{
    this.setState({count: this.state.count + 1})
    this.setState({isAdded: true})
    
    let oldCount = this.state.products[type];
    let updateCount = oldCount + 1;
    let updateProducts = {...this.state.products}
    updateProducts[type] = updateCount;
    const priceAddition = productPrice[type];

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    
    this.setState({
      products : updateProducts,
      totalPrice : newPrice
    });
    this.newNumber(updateProducts);
    this.setState({modal: true})
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
       modal={this.state.modal}
       data={this.state.products}
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
