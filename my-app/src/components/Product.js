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
  render() {
    const prodData = {
      id: "1",
      name: "Nike",
      price: "2000",
      image: "/file.png",
    };
    return (
      <div>
        <img src={prodData.image} alt={prodData.name}></img>
        <h4>{prodData.name}</h4>
        <h5>{prodData.price}</h5>
        <button>Add to cart</button>
      </div>
    );
  }
}

export default Product;
