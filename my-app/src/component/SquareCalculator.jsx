import React, { useState, useMemo } from "react";

const SquareCalculator = () => {
  const [number, setNumber] = useState(0);

  // useMemo avoids recalculation unless `number` changes
  const squared = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Square Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
        placeholder="Enter a number"
      />
      <p>Square: {squared}</p>
    </div>
  );
};

export default SquareCalculator;
