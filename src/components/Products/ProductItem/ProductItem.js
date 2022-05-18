import React from "react";
import ProductBtn from "./ProductBtn/ProductBtn";

export default function ProductItem(props) {
  return (
    <div>
      <li className="d-flex product-item justify-content-between">
        <div>
          <h5 className="product-name">{props.data.mealName}</h5>
          <p className="mb-2 product-desc">{props.data.mealDesc}</p>
          <span className="product-price">${props.data.mealPrice}</span>
        </div>

        <ProductBtn
          addHandler={props.addHandler} 
          submitHandler={props.submitHandler}
        />
       
      </li>
    </div>
  );
}
