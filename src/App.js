import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import AddItem from "./Components/AddItem";

function App() {
  const products = [
    {
      price: 75000,
      name: "Lenovo IdeaPad 5",
      quantity: 0,
    },
    {
      price: 125000,
      name: "Apache RTR 160 4V",
      quantity: 0,
    },
    {
      price: 35000,
      name: "Samsung Galaxy A35s",
      quantity: 0,
    },
    {
      price: 6000,
      name: "BOAT Stone 2000",
      quantity: 0,
    },
    {
      price: 45000,
      name: "HP Notebook",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      return (products.quantity = 0);
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    newProductList.splice(index, 1);
    setProductList(newProductList);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <React.Fragment>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem = {addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </React.Fragment>
  );
}

export default App;
