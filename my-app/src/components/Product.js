/**
 * Goal: Display the single product in list of products.
 *
 * Functions:
 *  1. Display the product info.
 *  2. Fetch the single product info.
 *  3. Add to cart.
 *  4. Add to wishlist.
 */

import React from "react";

class Product extends React.Component {
  // Adding button events basically backend thing
  // dont add in the dumb component move to its smart component.
  // buy() {
  //   console.log("Buy");
  // }

  // wishlist() {
  //   console.log("Wishlisted");
  // }


  // If the functionality is big better to use function
  // else use ternary operator.
  renderStock(data) {
    if (data.stock) {
      return (
        <button onClick={() => this.props.buyProduct(data)}> Buy Now</button>
      );
    }
    return <p>Out of stock</p>;
  }

  render() {
    const data = this.props.data;
    // console.log("data", data);
    // const prodData = {
    //   id: "1",
    //   name: "Nike",
    //   price: "2000",
    //   image: "/file.png",
    // };
    return (
      <div>
        <img src={data.productImage} alt={data.name}></img>
        <h4>{data.productName}</h4>
        <h5>{data.productPrice}</h5>
        {/* Function Invocation */}
        <button onClick={this.addToWishlist}>
          Add to {this.props.wishlist ? "Wishlist" : "Cart"}
        </button>
        {this.renderStock(data)}
      </div>
    );
  }
}

export default Product;
