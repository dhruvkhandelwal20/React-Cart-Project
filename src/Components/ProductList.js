import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((products, i) => {
      return (
        <Product
          products={products}
          key={i}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          index={i}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <div className="col-6">
      <h3>No Products Available in the Cart!</h3>
    </div>
  );
}
