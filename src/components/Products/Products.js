import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import "./Products.css";

const arr  = [
  {
    id: 1,
    mealName: "Sushi",
    mealDesc: "Finest fish and veggies",
    mealPrice: 22.99,
    type: 'sushi'
  },

  {
    id: 2,
    mealName: "Schnitzel",
    mealDesc: "A german specialty!",
    mealPrice: 16.99,
    type: 'german'

  },

  {
    id: 3,
    mealName: "Barbecue Burger",
    mealDesc: "American, raw, meaty",
    mealPrice: 12.99,
    type: 'american'
  },

  {
    id: 4,
    mealName: "Green Bowl",
    mealDesc: "Healthy...and green...",
    mealPrice: 18.99,
    type: 'greenBowl'
  },
]


export default function Products(props) {
  return (
    <>
      <ul className="product-list">
        {arr.map((item, i) => {
          return (
            <ProductItem
            key={i}
             data={item}
             addHandler={() => props.addHandler(item.type)}
             submitHandler={props.submitHandler}
            />
          );
        })}
      </ul>
    </>
  );
}
export {arr};
