// File: DataFetcher.js

import React, { useState, useEffect } from 'react';

// ✅ Custom Hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // to avoid setting state after unmount

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading };
}

// ✅ Usage Component
function DataFetcher() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Fetched Data:</h2>
      <p><strong>Title:</strong> {data.title}</p>
    </div>
  );
}

export default DataFetcher;
