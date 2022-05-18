import React from "react";
import "./Products.css";



export default function Products(props) {
  const product = props.allproduct
  return (
    <>
      <ul className="product-list">
        {product.map((item, i) => {
          return (
            <li
              id={item.id}
              key={i}
              className="d-flex product-item justify-content-between"
            >
              <div>
                <h5 className="product-name">{item.mealName}</h5>
                <p className="mb-2 product-desc">{item.mealDesc}</p>
                <span className="product-price">${item.mealPrice}</span>
              </div>

              <div>
                <div className="d-flex align-items-center">
                  <p className="m-0 product-name me-3">Amount</p>
                  <input
                    className="amount-input"
                    type="number"
                    placeholder="1"
                  />
                </div>
                <button onClick={props.addHandler} className="product-btn">
                  +Add
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
