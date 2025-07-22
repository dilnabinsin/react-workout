import React, { Component ,useState,useEffect} from 'react'



// function UseSExa() {
//   let temp = 0; // Resets on every render
//   const [count, setCount] = useState(0); // Persists
//   temp += 1; // No effect on UI
//   console.log(temp); // Always logs 1
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Count: {count}
//     </button>
//   );
// }


// useref

  // Dependencies of useEffect
function UseSExa({ step }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + step);
    }, 5000);
    return () => clearInterval(interval);
  }, [step]); // Dependency: step
  return <p>Count: {count}</p>;
}
export default UseSExa;

// Handling componentDidUpdate in Functional Components
// import { useEffect } from 'react';

// function MyComponent({ prop1 }) {
//   useEffect(() => {
//     // Runs after prop1 changes (like componentDidUpdate)
//     console.log('prop1 updated:', prop1);
//   }, [prop1]); // Dependency array: effect runs when prop1 changes

//   return <div>{prop1}</div>;
// }

//Advantages of useRef
// import { useRef, useEffect } from 'react';

// function MyComponent({ prop1 }) {
//   const prevPropRef = useRef();

//   useEffect(() => {
//     console.log('Previous prop:', prevPropRef.current);
//     console.log('Current prop:', prop1);
//     prevPropRef.current = prop1; // Update without re-render
//   }, [prop1]);

//   return <div>{prop1}</div>;
// }