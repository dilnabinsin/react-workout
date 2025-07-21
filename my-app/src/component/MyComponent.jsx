import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Component mounted!');
  }, []);

  return <div>Hello, World!</div>;
}

export default MyComponent;