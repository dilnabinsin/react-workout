import React, { useState } from 'react';
import Child1 from './Child1';

function Parent1() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <div>
      <Checkbox checked={isChecked} onToggle={handleToggle} />
    </div>
  );
}

export default Parent1