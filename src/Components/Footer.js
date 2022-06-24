import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.resetQuantity();
        }}
      >
        Reset
      </button>
      <div className="col-8 bg-dark text-white text-center">
        Total Amount:&nbsp;₹{props.totalAmount}
      </div>
      <button className="col-2 btn btn-primary">Pay Now</button>
    </div>
  );
}
