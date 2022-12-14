import logo from "./logo.svg";
import React, { useState, useEffect, Component } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/jsonBodyList")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const productItems = products.map((item, index) => (
    <div key={index.id}>{item.description}</div>
  ));

  return (
    <div>
      <div>{productItems}</div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
