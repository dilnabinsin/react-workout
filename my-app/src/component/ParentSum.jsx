// const a = [1,23,12,2,22,35,5,3,256,234,25,235,32,32]

import React, { useState } from 'react';
import ChildSum from './ChildSum';

const ParentSum = () => {
  const [middleSum, setMiddleSum] = useState(0);

  const handleMiddleSum = (sum) => {
    setMiddleSum(sum);
  };

  return (
    <div>
      <h2>Sum of Middle 5 Elements: {middleSum}</h2>
      <ChildSum onCalculateSum={handleMiddleSum} />
    </div>
  );
};

export default ParentSum;
//parent to child comm
// import React from 'react';
// import Child from './Child';

// const Parent = () => {
//   const numbers = [1, 23, 12, 2, 22, 35, 5, 3, 256, 234, 25, 235, 32, 32];

//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <Child data={numbers} />
//     </div>
//   );
// };

// export default Parent;
