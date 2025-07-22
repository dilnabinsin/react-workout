 import React, { useRef } from 'react';
import { useMemo, useState } from 'react';
function Userefinput() {
  const inputRef = useRef(null); // Step 1: Create a ref

  const handleClick = () => {
    console.log("Input value:", inputRef.current.value); // Step 3: Access value
  };

  return (
    <div>
      <h2>Access Input Value Using useRef</h2>
      {/* Step 2: Attach ref to input */}
      <input type="text" ref={inputRef} placeholder="Enter something" />
      <button onClick={handleClick}>Print Value</button>
    </div>
  );
}





// function ddd() {
//   const inputRef = useRef();

//   const logValue = () => {
//     console.log('Input value:', inputRef.current.value); // Access DOM input value
//   };

//   return (
//     <div>
//       <input ref={inputRef} defaultValue="Hello" />
//       <button onClick={logValue}>Log Value</button>
//     </div>
//   );
// }


//usememo
// function Userefinput({ numbers }) {
//   const [count, setCount] = useState(0);

//   // Memoize expensive calculation
//   const sortedNumbers = useMemo(() => {
//     console.log('Sorting numbers...');
//     return [...numbers].sort((a, b) => a - b);
//   }, [numbers]); // Only recompute when numbers changes

//   return (
//     <div>
//       <p>Sorted: {sortedNumbers.join(', ')}</p>
//       <button onClick={() => setCount(count + 1)}>Count: {count}</button>
//     </div>
//   );
// }



export default Userefinput;
