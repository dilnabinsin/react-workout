import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  const fetchData = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('✅ Data Loaded!'), 1000);
      // To simulate an error, you can use: reject('❌ Error');
    });

  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>React Promise Example</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
