import React, { createContext, useContext, useState } from "react";

// Context
const CalcContext = createContext();

// Provider
const CalcProvider = ({ children }) => {
  const [result, setResult] = useState(0);

  const add = (a, b) => setResult(a + b);

  return (
    <CalcContext.Provider value={{ result, add }}>
      {children}
    </CalcContext.Provider>
  );
};

// Calculator Component
const Calculator = () => {
  const { result, add } = useContext(CalcContext);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Context Calculator</h2>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(+e.target.value)}
        placeholder="Enter number A"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(+e.target.value)}
        placeholder="Enter number B"
      />
      <div>
        <button onClick={() => add(a, b)}>Add</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <CalcProvider>
      <Calculator />
    </CalcProvider>
  );
};

export default App;
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>React Context Calculator</title>
//   </head>
//   <body>
//     <div id="root"></div>
//   </body>
// </html>
