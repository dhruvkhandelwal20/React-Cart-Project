import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
          this.setState({productName: '', productPrice: ''});
        }}
      >
        <div className="col-4 mb-3">
          <label htmlFor="inputProductName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputProductName"
            aria-describedby="emailHelp"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="col-4 mb-3">
          <label htmlFor="inputProductPrice" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            className="form-control"
            id="inputProductPrice"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="col-4 btn btn-primary">
          Add Item
        </button>
      </form>
    );
  }
}

export default AddItem;
