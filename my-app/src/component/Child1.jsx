


import React, { Component } from 'react'



function Child1({ checked, onToggle }) {

  return (
    <label>
      <input type="checkbox" checked={checked} readOnly />
      <button onClick={onToggle}>Toggle</button>
    </label>
  );
}

export default Child1;
