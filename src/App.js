import React, { useState, useEffect, Component } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Server from "./Server";

function App() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/jsonBodyList")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // }, []);
  // const productItems = products.map((item, index) => (
  //   <div key={index.id}>{item.description}</div>
  // ));

  return (
    <div>
      {/* <div>{productItems}</div> */}
      <Navbar />
      <Server />
      <Footer />
    </div>
  );
}

export default App;
