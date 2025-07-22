// File: App.js
import React from 'react';

// ✅ Higher-Order Component: Logs props
function withLogger(WrappedComponent) {
  return function LoggerComponent(props) {
    console.log('🔍 Rendering', WrappedComponent.name, 'with props:', props);
    return <WrappedComponent {...props} />;
  };
}

// ✅ Original Component
const MyComponent = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// ✅ Wrapped Component
const LoggedComponent = withLogger(MyComponent);

// ✅ App Component
function App() {
  return (
    <div>
      <h2>🌟 Higher-Order Component Demo</h2>
      <LoggedComponent name="User" />
    </div>
  );
}

export default App;
