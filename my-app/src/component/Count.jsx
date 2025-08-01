import { useState } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Count;

//Create Counter Using useReducer
//use reducer  app.jsx 
// import React, { useReducer } from "react";

// 1. Reducer Function

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//     case "RESET":
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

// 2. Main Component
// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Counter using useReducer</h2>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//     </div>
//   );
// }

// export default App;



//3.
//calculator
// import React, { useReducer, useState } from "react";

// Reducer function
// const calculatorReducer = (state, action) => {
//   const { num1, num2 } = action.payload || {};
//   switch (action.type) {
//     case "ADD":
//       return { result: num1 + num2 };
//     case "SUBTRACT":
//       return { result: num1 - num2 };
//     case "MULTIPLY":
//       return { result: num1 * num2 };
//     case "DIVIDE":
//       return { result: num2 !== 0 ? num1 / num2 : "Error: Divide by zero" };
//     case "RESET":
//       return { result: 0 };
//     default:
//       return state;
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(calculatorReducer, { result: 0 });
//   const [num1, setNum1] = useState("");
//   const [num2, setNum2] = useState("");

//   const handleOperation = (type) => {
//     dispatch({
//       type,
//       payload: { num1: parseFloat(num1), num2: parseFloat(num2) },
//     });
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Simple Calculator using useReducer</h2>
//       <input
//         type="number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//         placeholder="First number"
//       />
//       <input
//         type="number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//         placeholder="Second number"
//       />
//       <div style={{ margin: "20px" }}>
//         <button onClick={() => handleOperation("ADD")}>+</button>
//         <button onClick={() => handleOperation("SUBTRACT")}>−</button>
//         <button onClick={() => handleOperation("MULTIPLY")}>×</button>
//         <button onClick={() => handleOperation("DIVIDE")}>÷</button>
//         <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//       </div>
//       <h3>Result: {state.result}</h3>
//     </div>
//   );
// }

// export default App;
