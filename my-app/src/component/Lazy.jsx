
// import React from 'react';

// function LazyComponent() {
//   return <div>I am a Lazy Loaded Component!</div>;
// }

// export default LazyComponent;




import React, { Suspense, useEffect, useState } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>Main App</h1>
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}

export default App;
