import React, { useRef, useState } from "react";

const AverageCalculator = () => {
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const [avg, setAvg] = useState(0);

  const calculate = () => {
    const num1 = +num1Ref.current.value;
    const num2 = +num2Ref.current.value;

    if (!isNaN(num1) && !isNaN(num2)) {
      setAvg((num1 + num2) / 2);
    } else {
      setAvg(0);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Average Calculator</h2>

      <input
        type="number"
        ref={num1Ref}
        placeholder="Enter first number"
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        ref={num2Ref}
        placeholder="Enter second number"
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={calculate}>Calculate Average</button>
      </div>

      <p style={{ marginTop: "10px" }}>Average: {avg}</p>
    </div>
  );
};

export default AverageCalculator;
