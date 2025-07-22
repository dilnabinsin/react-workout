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