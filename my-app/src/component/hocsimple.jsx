// import React from 'react';

// function Withmessage(WrappedComponent) {
//   return function EnhancedComponent(props) {
//     const message = "Hello from HOC!";
//     return <WrappedComponent message={message} {...props} />;
//   };
// }

// export default Withmessage;

//Hocomponent.jsx
// import React from 'react';

// function Hocomponent({ message }) {
//   return <h2>{message}</h2>;
// }

// export default Hocomponent;


//app.jsx
// import React from 'react';
// import HelloComponent from './HelloComponent';
// import withMessage from './withMessage';

// const EnhancedHello = withMessage(HelloComponent);

// function App() {
//   return (
//     <div>
//       <EnhancedHello />
//     </div>
//   );
// }

// export default App;