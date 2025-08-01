// ErrorBoundary.jsx
// import React from "react";

// class ErrorBoundary extends React.Component {
//   constructor() {
//     super();
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h2>Something went wrong.</h2>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
// Crasher.jsx
// import React from "react";

// function Crasher() {
//   throw new Error("I crashed!");
//   return <p>This won't show.</p>;
// }

// export default Crasher;

    //   <ErrorBoundary>
    //     <Crasher />
    //   </ErrorBoundary>
