
import React, { useState, useEffect } from 'react';
// function Basic() {
//   return <h1>Hello Worldffffffffffff!</h1>;
// }

// One Single Element Returned

// function Basic1(){
//     const fruits= ["apple","orange","grapes"]

// return(

// <div>
// <ul>
// {
//     fruits.map((item,index)=>(<li key={index}>{item}</li>))
// }
// </ul>

// </div>
// )

// }
//Fetch Data Using useEffect


// function Basic2() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users/2')
//       .then(res => res.json())
//       .then(data => setUser(data));
//   }, []);

//   return (
//     <div>
//       {user ? <h3>User: {user.name}</h3> : <p>Loading...</p>}
//     </div>
//   );
// }
//////////////////////////////////////////
function Basic() {
  const handleClick = () => {
    alert('🚨 This is an alert!');
  };

  return <button onClick={handleClick}>Show Alert</button>;
}

 
 /////////////////////////////////////////////////////////////
//  import React, { useState } from 'react';
// import Checkbox from './Checkbox'; // Child component

// function ParentToggle() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleToggle = () => {
//     setIsChecked(prev => !prev);
//     alert(`Checkbox is now ${!isChecked ? 'checked' : 'unchecked'}`);
//   };

//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <Checkbox checked={isChecked} onToggle={handleToggle} />
//     </div>
//   );
// }

// export default ParentToggle;

// import React from 'react';

// function Checkbox({ checked, onToggle }) {
//   return (
//     <div>
//       <label>
//         <input type="checkbox" checked={checked} readOnly />
//         Checkbox is {checked ? 'Checked ✅' : 'Unchecked ❌'}
//       </label>
//       <br />
//       <button onClick={onToggle}>Toggle Checkbox</button>
//     </div>
//   );
// }

// export default Checkbox;
//  <div style={{ padding: '20px' }}>
//       <h1>React Toggle Checkbox Example</h1>
//       <ParentToggle />
//     </div>

export default Basic