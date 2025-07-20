import React, { useRef } from 'react';

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

export default Userefinput;
