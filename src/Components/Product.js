import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h6>
          {props.products.name}{" "}
          <span class="badge bg-secondary">₹{props.products.price}</span>
        </h6>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.products.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.products.quantity * props.products.price}
      </div>
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove Item
      </button>
    </div>
  );
}
