// Child Component
//Child to Parent Communication
import React ,{useState} from "react";
function Child({ onData }) {
  const handleClick = () => {
    onData('Data from child');
  };

  return <button onClick={handleClick}>Send to Parent</button>;
}

// Parent Component
function Parent() {
  const [data, setData] = useState('');

  return (
    <div>
      <h1>Parent Data: {data}</h1>
      <Child onData={setData} />
    </div>
  );
}

export default Parent;