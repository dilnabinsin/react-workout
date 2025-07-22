
import { useEffect, useLayoutEffect } from 'react';
// function MyComponent() {
//   useEffect(() => {
//     console.log('Component mounted!');
//   }, []);

//   return <div>Hello, World!</div>;
// }


function MyComponent({ value }) {
  useEffect(() => {
    console.log('useEffect: Runs after paint', value);
  }, [value]);

  useLayoutEffect(() => {
    console.log('useLayoutEffect: Runs before paint', value);
  }, [value]);

  return <div>{value}</div>;
}


//Tracking Previous State
// import { useState, useEffect, useRef } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef();

//   useEffect(() => {
//     console.log('Previous count:', prevCountRef.current);
//     console.log('Current count:', count);
//     prevCountRef.current = count; // Update previous value
//   }, [count]); // Runs when count changes

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }
export default MyComponent;