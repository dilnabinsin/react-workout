// ParentComponent.js
import React, { useState } from 'react';
import MyPureFunction from './MyPureFunction';

function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MyPureFunction name="Dilna" />
    </div>
  );
}
// MyPureFunction.js
import React from 'react';

const MyPureFunction = React.memo(function ({ name }) {
  console.log("Rendering MyPureFunction");
  return <h2>Hello, {name}</h2>;
});

export default MyPureFunction;


// classimport React from 'react';

// const MyPureFunction = React.memo(function MyComponent({ name }) {
//   console.log("Rendering MyComponent");
//   return <h2>Hello, {name}</h2>;
// });