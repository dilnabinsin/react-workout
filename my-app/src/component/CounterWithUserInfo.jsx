import React, { useEffect, useState } from 'react';

function CounterWithUserInfo() {
  const [count, setCount] = useState(1); // userId (1–10)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Clear previous data
    setUser(null);
    setError('');
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('User not found');
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [count]); // Refetch when count changes

  return (
    <div>
      <h2>Counter with User Info</h2>

      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setCount((c) => Math.max(1, c - 1))}>➖</button>
        <span style={{ margin: '0 10px' }}>User ID: {count}</span>
        <button onClick={() => setCount((c) => Math.min(10, c + 1))}>➕</button>
      </div>

      {/* States */}
      {loading && <p>Loading user...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {user && (
        <div style={{ border: '1px solid gray', padding: '10px', borderRadius: '8px' }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
        </div>
      )}
    </div>
  );
}

export default CounterWithUserInfo;
