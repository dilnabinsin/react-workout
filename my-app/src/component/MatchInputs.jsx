import { useState } from 'react';

function MatchInputs() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [message, setMessage] = useState('');

  const checkMatch = () => {
    setMessage(input1 === input2 ? 'Inputs match!' : 'Inputs do not match.');
  };

  return (
    <div>
      <input 
        value={input1} 
        onChange={e => setInput1(e.target.value)} 
        placeholder="First input" 
      />
      <input 
        value={input2} 
        onChange={e => setInput2(e.target.value)} 
        placeholder="Second input" 
      />
      <button onClick={checkMatch}>Check</button>
      <p>{message}</p>
    </div>
  );
}

export default MatchInputs;