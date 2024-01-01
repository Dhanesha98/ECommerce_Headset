import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Shop from "./components/Shop";
import Services from "./components/Services";
import Promotion from "./components/Promotion";

function App() {
  return (
    <div>
          <Navbar/>
          <Home/>
          <Shop/>
          <Products/>
          <Promotion/>
          <Services/>
    </div>
  );
}

export default App;
