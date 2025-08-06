import React, { useEffect } from 'react';

const ChildSum = ({ onCalculateSum }) => {
  const a = [1, 23, 12, 2, 22, 35, 5, 3, 256, 234, 25, 235, 32, 32];

  useEffect(() => {
    const midIndex = Math.floor(a.length / 2);
    const start = Math.max(0, midIndex - 2); // ensure no negative index
    const middleFive = a.slice(start, start + 5);

    const sum = middleFive.reduce((acc, val) => acc + val, 0);
    onCalculateSum(sum); // send to parent
  }, [onCalculateSum]);

  return <div>Child calculated sum</div>;
};

export default ChildSum;
//parent to child

// import React, { useEffect, useState } from 'react';

// const Child = ({ data }) => {
//   const [middleSum, setMiddleSum] = useState(0);

//   useEffect(() => {
//     const midIndex = Math.floor(data.length / 2);
//     const start = Math.max(0, midIndex - 2);
//     const middleFive = data.slice(start, start + 5);

//     const sum = middleFive.reduce((acc, num) => acc + num, 0);
//     setMiddleSum(sum);
//   }, [data]);

//   return (
//     <div>
//       <h3>Child Component</h3>
//       <p>Sum of Middle 5 Elements: {middleSum}</p>
//     </div>
//   );
// };

// export default Child;
