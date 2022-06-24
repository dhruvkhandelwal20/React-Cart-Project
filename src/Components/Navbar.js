import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000">
            Apna Cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
