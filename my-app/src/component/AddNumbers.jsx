import { useState } from 'react';

function AddNumbers() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleAdd = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="First number"  />
      <input  type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="Second number" />
      <button onClick={handleAdd}>Add</button>
      {sum !== null && <p>Sum: {sum}</p>}
    </div>
  );
}

export default AddNumbers;