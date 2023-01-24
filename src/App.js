import React, { useState, useEffect, Component } from "react";
import "./App.css";

import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import NavRouting from "./Main/Nav-items/NavRouting";
import Products from "./Main/Products/Products";
import HomePage from "./Main/Home/Home";
import HomeComponent from "./Main/Home/Home";
import RoutingElements from "./data.json";
import { BrowserRouter } from "react-router-dom";
import { browserHistory, Router, Route, Routes } from "react-router";

import { useMediaQuery } from "react-responsive";

function App() {
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
  const itemCategory = RoutingElements.map(function (element) {
    return element.category;
  }); // 6 values inside our array
  // let uniqueCategory = new Set(itemCategory);
  // let uniqueCategoryArray = Array.from(uniqueCategory); // headphones, speakers, earphones...
  // let routingArray = [];
  // for (let i = 0; i < uniqueCategoryArray.length; i++) {
  //   routingArray.push(
  //     <Route path={i} element={<NavRouting loadComponent={{ i }} />} />
  //   );
  // }
  // console.log(routingArray);
  // return (
  //   <>
  //     <Navbar />
  //     <NavRouting loadComponent={"headphones"} />
  //     <Routes>
  //       <Route path="/" />
  //       <Route path="" element={<HomeComponent />} />
  //       <Route path="/products/:product" element={<NavRouting />} />
  //       {/* <Route
  //           path="headphones"
  //           element={<NavRouting loadComponent={"headphones"} />}
  //         /> */}
  //     </Routes>
  //     <Footer />
  //   </>
  // );
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="" element={<HomeComponent />} />
          <Route
            path="headphones"
            element={<NavRouting loadComponent={"headphones"} />}
          />
          <Route
            path="speakers"
            element={<NavRouting loadComponent={"speakers"} />}
          />
          <Route
            path="earphones"
            element={<NavRouting loadComponent={"earphones"} />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
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

// const Example = () => {
//   const isDesktopOrLaptop = useMediaQuery({
//     query: "(min-width: 1224px)",
//   });
//   const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
//   const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
//   const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
//   const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

//   return (
//     <div>
//       <h1>Device Test!</h1>
//       {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
//       {isBigScreen && <p>You have a huge screen</p>}
//       {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
//       <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
//       {isRetina && <p>You are retina</p>}
//     </div>
//   );
// };

export default App;
