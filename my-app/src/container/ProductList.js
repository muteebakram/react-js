import React from "react";
import Product from "../components/Product";
import { getProducts } from "../services/Product";

class ProductList extends React.Component {
  state = { prodList: [] };
  componentDidMount() {
    this.getData();
  }

  buy(prod) {
    console.log("Buy", prod.name);
  }

  wishlist(prod) {
    console.log("Wishlisted", prod.name);
  }

  getData() {
    getProducts()
      .then((res) => {
        // console.log("Res: ", res);
        // this.state.prodList = res.data; // wrong:mutating state
        this.setState({ prodList: res.data }); //immutatbility is provided setState has render call after changing data
      })
      .catch((e) => {
        console.error("Err: ", e);
      });
  }

  render() {
    // const prodList = [
    //   {
    //     id: "1",
    //     name: "Nike",
    //     price: "2000",
    //     image: "/file.png",
    //     wishlist: true,
    //     stock: true,
    //   },
    //   {
    //     id: "2",
    //     name: "Adidas",
    //     price: "2000",
    //     image: "/file.png",
    //     wishlist: false,
    //     stock: false,
    //   },
    //   {
    //     id: "3",
    //     name: "Puma",
    //     price: "2000",
    //     image: "/file.png",
    //     wishlist: false,
    //     stock: true,
    //   },
    // ];

    return (
      <div>
        {this.state.prodList.map((p) => (
          <Product
            key={p.productId}
            data={p}
            wishlist={p.wishlist}
            buyProduct={(prod) => this.buy.bind(this)}
            addToWishlist={(prod) => this.wishlist()}
          ></Product>
        ))}
      </div>

      //   <div>
      //     <Product data={prodList}></Product>
      //     <Product data={prodList} wishlist={true}></Product>
      //   </div>
    );
  }
}

export default ProductList;
