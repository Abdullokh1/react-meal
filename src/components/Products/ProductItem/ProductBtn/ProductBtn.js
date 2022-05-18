import React from 'react'

export default function ProductBtn(props) {
  return (
    <div>
      <form onSubmit={props.submitHandle}>
        <div className="d-flex align-items-center">
          <p className="m-0 product-name me-3">Amount</p>
          <input className="amount-input" type="number" placeholder="1" />
        </div>
      </form>
      <button onClick={props.addHandler} className="product-btn">
        +Add
      </button>
  </div>
  )
}
