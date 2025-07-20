import React, { useState } from 'react';

function ChildComponent({ sendDataToParent }) {
  const [input, setInput] = useState('');

  const handleClick = () => {
    sendDataToParent(input); // Call parent's function with data
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        placeholder="Type something"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Send to Parent</button>
    </div>
  );
}

export default ChildComponent;