import { createContext, useContext, useState } from 'react';
import InputExample from './component/InputExample';
import Userefinput from './component/Userefinput';
import ParentComponent from './component/ParentComponet';
import InputDisplay from './component/InputDisplay';
// Create Context
const CounterContext = createContext();

// Context Provider
function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

// Counter Component
function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// App Component
function App() {
  return (
    <>
    // <CounterProvider>
    //   <Counter />
    // </CounterProvider>
    <InputExample/>
    <Userefinput/>
     <h1>React Parent to Child Data</h1>
      <ParentComponent />
{/* ////////////////////////////////////////// */}

      <h2>Typing App</h2>
      <InputDisplay />
    </>
  );
}

export default App;
