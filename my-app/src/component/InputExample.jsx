import React, { useRef, useState } from 'react';

function ShowName() {
  const inputRef = useRef(null);       // Ref for the input
  const [name, setName] = useState(''); // State to hold and display the name

  const handleClick = () => {
    const enteredName = inputRef.current.value;
    setName(enteredName); // Update state to trigger re-render
  };

  return (
    <div>
      <h2>Enter Your Name</h2>
      <input type="text" ref={inputRef} placeholder="Type your name" />
      <button onClick={handleClick}>Submit</button>

      {/* Display name in <p> */}
      <p>{name ? ` ${name}` : ''}</p>
    </div>
  );
}

export default ShowName;
