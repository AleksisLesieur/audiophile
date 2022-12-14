import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";

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

  return <div>{productItems}</div>;
}

export default App;
