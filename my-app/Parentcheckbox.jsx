// Parent.jsx
import React, { useState } from 'react';
import Checkbox from './src/component/Checkbox'; // ✅ Import child component

function Parent() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h2>Checkbox Controlled from Parent</h2>
      
      <Checkbox 
        checked={isChecked} 
        onToggle={() => setIsChecked(!isChecked)} 
      />

      <button onClick={() => setIsChecked(!isChecked)}>
        Toggle Checkbox
      </button>

      <p>Checked: {isChecked.toString()}</p>
    </div>
  );
}

export default Parent;
