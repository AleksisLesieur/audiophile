import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* help document and connect our API with (or to) our game development team */

// to install firebase

// npm install firebase

// Then, initialize Firebase and begin using the SDKs for the products you'd like to use.

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA1hEqaRjNdiyR1o9yhRCqKI2xvNIqg-WQ",
//   authDomain: "audiophile-react-project.firebaseapp.com",
//   projectId: "audiophile-react-project",
//   storageBucket: "audiophile-react-project.appspot.com",
//   messagingSenderId: "77859307593",
//   appId: "1:77859307593:web:16c35db7b6cf94e4c53f98",
//   measurementId: "G-NM3L621ZX9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

// Run the following npm command to install the CLI or update to the latest CLI version.

// npm install -g firebase-tools

// Doesn't work? Take a look at the Firebase CLI reference or change your npm permissions

// https://audiophile-react-project.web.app/
