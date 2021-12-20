import "./App.css";
import React from "react";
import Demo from "./Demo";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Demo></Demo>
      <Product></Product>
    </div>
  );
}

// Default export means by default this will be exported as when someone imports.
export default App;

// Inline export
// export function App;

// Named export
// export {App};
