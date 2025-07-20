import { useState } from 'react';

function InputDisplay() {
  const [text, setText] = useState('');

  return (
    <div>
      <input 
        value={text} 
        onChange={e => setText(e.target.value)} 
        placeholder="Enter text" 
      />
      <h1>{text}</h1>
    </div>
  );
}

export default InputDisplay;
