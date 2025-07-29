// Checkbox.jsx
import React from 'react';

function Checkbox({ checked, onToggle }) {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onToggle} />
      Check me!
    </label>
  );
}



export default Checkbox;
