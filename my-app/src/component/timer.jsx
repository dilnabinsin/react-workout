import { useState, useEffect } from 'react';

// setInterval in useEffect
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <div>Time: {seconds}s</div>;
}

export default Timer;

//Timer Using useEffect

// import React, { useState, useEffect } from "react";

// function Timer() {
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (isActive) {
//       interval = setInterval(() => {
//         setSeconds((prev) => prev + 1);
//       }, 1000);
//     }

//     return () => clearInterval(interval); // Cleanup
//   }, [isActive]);

//   const toggle = () => setIsActive(!isActive);
//   const reset = () => {
//     setSeconds(0);
//     setIsActive(false);
//   };

//   return (
//     <div>
//       <h1>⏱️ Timer: {seconds}s</h1>
//       <button onClick={toggle}>
//         {isActive ? "Pause" : "Start"}
//       </button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Timer;
