// Custom Hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// Usage
function DataFetcher() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  if (loading) return <p>Loading...</p>;
  return <p>{data.title}</p>;
}

export default DataFetcher;

// File: useCounter.js
// import { useState } from 'react';

// function useCounter(initialValue = 0) {
//   const [count, setCount] = useState(initialValue);

//   const increment = () => setCount((c) => c + 1);
//   const decrement = () => setCount((c) => c - 1);
//   const reset = () => setCount(initialValue);

//   return { count, increment, decrement, reset };
// }

// export default useCounter;
// File: CounterComponent.js
// import React from 'react';
// import useCounter from './useCounter';

// function CounterComponent() {
//   const { count, increment, decrement, reset } = useCounter(0);

//   return (
//     <div>
//       <h2>🔢 Count: {count}</h2>
//       <button onClick={increment}>➕ Increment</button>
//       <button onClick={decrement}>➖ Decrement</button>
//       <button onClick={reset}>🔁 Reset</button>
//     </div>
//   );
// }

// export default CounterComponent;
