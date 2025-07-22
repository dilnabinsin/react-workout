import React, { Component } from 'react'




function CustomButton({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
// Usage
<CustomButton label="Click Me" onClick={() => alert("Clicked!")} />


export default  CustomButton;