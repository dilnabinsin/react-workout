import React, { useState } from 'react';
import ChildComponent from './ChildComponet';
function ParentComponent() {
  const [childData, setChildData] = useState('');

  const handleDataFromChild = (data) => {
    setChildData(data); // Save data coming from child
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Data from child: {childData}</p>

      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default ParentComponent;