import "./App.css";
import React from "react";
import Demo from "./Demo";
import CheckOut from "./container/CheckOut";
import ProductList from "./container/ProductList";

function App() {
  return (
    <div>
      <CheckOut></CheckOut>
      <Demo></Demo>
      <ProductList></ProductList>
    </div>
  );
}

// Default export means by default this will be exported as when someone imports.
export default App;

// Inline export
// export function App;

// Named export
// export {App};
