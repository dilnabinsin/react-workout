import React, { useState, useEffect } from "react";

const ResizeComponent = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Initial call (optional, for SSR safety or if value could change fast)
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Window Resize Tracker</h2>
      <p>Window Width: {size}px</p>
    </div>
  );
};

export default ResizeComponent;
