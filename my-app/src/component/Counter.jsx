
//counter using context

import { createContext, useContext, useState } from 'react';

// Create Context
const CounterContext = createContext();

// Context Provider
function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

// Counter Component
function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// App Component
function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
//////////////////////////////////////////////////////////////////////////////////

//Counter with useCallback
// import React, { useState, useCallback } from "react";
// import CountDisplay from "./CountDisplay";

// function App() {
//   const [count, setCount] = useState(0);

  // useCallback prevents recreation of the increment function on every render
//   const increment = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);

//   const decrement = useCallback(() => {
//     setCount((prevCount) => prevCount - 1);
//   }, []);

//   return (
//     <div style={{ textAlign: "center", padding: "40px" }}>
//       <h2>Counter App using useCallback</h2>
//       <CountDisplay count={count} />
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement} style={{ marginLeft: "10px" }}>
//         Decrement
//       </button>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// const CountDisplay = React.memo(({ count }) => {
//   console.log("Rendering CountDisplay");
//   return <h3>Current Count: {count}</h3>;
// });

// export default CountDisplay;
