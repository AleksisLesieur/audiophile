import React, { useState, useEffect, Component } from "react";
import "./App.css";

import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import NavRouting from "./Main/Nav-items/NavRouting";
import ProductDetails from "./Main/Products/ProductDetails";
import HomePage from "./Main/Home/HomeComponent";
import HomeComponent from "./Main/Home/HomeComponent";
import RoutingElements from "./data.json";
import { BrowserRouter } from "react-router-dom";
import { browserHistory, Router, Route, Routes } from "react-router";

function App(props) {
  // return (
  //   <Routes>
  //     <Route path="/">
  //       <Route path="" element={<HomeComponent />} />
  //       <Route path="home" element={<HomeComponent />} />
  //       <Route
  //         path="headphones"
  //         element={<NavRouting loadComponent={"headphones"} />}
  //       />
  //       <Route
  //         path="speakers"
  //         element={<NavRouting loadComponent={"speakers"} />}
  //       />
  //     </Route>
  //     <Route
  //       path="earphones"
  //       element={<NavRouting loadComponent={"earphones"} />}
  //     />
  //   </Routes>
  // );
  // const itemCategory = RoutingElements.map(function (element) {
  //   return element.category;
  // });
  // 6 values inside our array
  // let uniqueCategory = new Set(itemCategory);
  // let uniqueCategoryArray = Array.from(uniqueCategory); // headphones, speakers, earphones...
  // let routingArray = [];
  // for (let i = 0; i < uniqueCategoryArray.length; i++) {
  //   routingArray.push(
  //     <Route path={i} element={<NavRouting loadComponent={{ i }} />} />
  //   );
  // }
  // console.log(routingArray);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="" element={<HomeComponent />} />
        <Route path="/products/:product" element={<NavRouting />} />
        <Route path="/product/:ProductID" element={<ProductDetails />} />
        <Route
          path="headphones"
          element={<NavRouting loadComponent={"headphones"} />}
        />
      </Routes>
      <Footer />
    </>
  );
  // return (
  //   <>
  //     <Navbar />
  //     <Routes>
  //       <Route path="/">
  //         <Route path="" element={<HomeComponent />} />
  //         <Route
  //           path="headphones"
  //           element={<NavRouting loadComponent={"headphones"} />}
  //         />
  //         <Route
  //           path="speakers"
  //           element={<NavRouting loadComponent={"speakers"} />}
  //         />
  //         <Route
  //           path="earphones"
  //           element={<NavRouting loadComponent={"earphones"} />}
  //         />
  //       </Route>
  //     </Routes>
  //     <Footer />
  //   </>
  // );
  // return (
  //   <div>
  //     <Navbar />
  //     <Products />
  //     <Footer />
  //   </div>
  // );
  // return (
  //   <div>
  //     <Navbar />
  //     <ProductDetails />
  //     <NavRouting />
  //   </div>
  // );
}

// function App() {
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
// useEffect(function () {
//   console.log(window.innerWidth);
// });

// return (
//   <Routes>
//     <Route path="/alex" element={<HomePage />}>
//       <Route path="/work" element={<Navbar />} />
//     </Route>
//   </Routes>
// );
// console.log(itemCategory);

// return (
//   <div>
//     <Navbar />
//     <Headphones loadComponent={"speakers"} />
//     <Footer />
//   </div>
// );
//}

export default App;
