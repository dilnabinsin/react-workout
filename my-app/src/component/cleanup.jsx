useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);

  return () => {
    clearInterval(timer); // Cleanup
    console.log("Component unmounted or dependency changed");
  };
}, []);

// Handling componentWillUnmount in Functional Components
// Use useEffect with cleanup function.


useEffect(() => {
  return () => {
    console.log("Component will unmount");
  };
}, []);

// Handling componentDidUpdate in Functional Components

useEffect(() => {
  console.log("Component updated");
}, [/* dependencies */]);
// You can simulate componentDidUpdate using useEffect with specific dependencies.

//import { useEffect, useState } from 'react';

// function TimerComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(prev => prev + 1);
//     }, 1000);

//     // Cleanup interval when component unmounts
//     return () => clearInterval(interval);
//   }, []); // Empty array = run once on mount

//   return <h1>Count: {count}</h1>;
// }
//