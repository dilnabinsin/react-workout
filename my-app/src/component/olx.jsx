// src/context/CounterContext.js
//contectil create cheyyuka
// import { createContext, useState } from "react";

// export const CounterContext = createContext();

// export const CounterProvider = ({ children }) => {
//   const [count, setCount] = useState(0);

//   const increment = () => setCount(prev => prev + 1);
//   const decrement = () => setCount(prev => prev - 1);

//   return (
//     <CounterContext.Provider value={{ count, increment, decrement }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };


// main.jsx or App.jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { CounterProvider } from "./context/CounterContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CounterProvider>
//      <footer/>
//     </CounterProvider>
//   </React.StrictMode>
// );


//footer sectionil
// import React, { useContext } from 'react';
// import './Footer.css';
// import { CounterContext } from '../context/CounterContext';

// const Footer = () => {
//   const { count, increment, decrement } = useContext(CounterContext);

//   return (
//     <footer className="olx-footer">
//       <div className="footer-top">
//         {/* ...existing content... */}
//         <div className="footer-section">
//           <h4>Counter (Demo)</h4>
//           <p>Value: {count}</p>
//           <button onClick={increment}>+</button>
//           <button onClick={decrement}>–</button>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         {/* ...existing content... */}
//         <p>All rights reserved © 2006-2025 OLX</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
