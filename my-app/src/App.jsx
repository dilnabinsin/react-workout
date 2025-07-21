import { createContext, useContext, useState } from 'react';
import InputExample from './component/InputExample';
import Userefinput from './component/Userefinput';
import ParentComponent from './component/ParentComponet';
import InputDisplay from './component/InputDisplay';
import Timer from './component/timer';
import MatchInputs from './component/MatchInputs';
import AddNumbers from './component/AddNumbers';
import Parent from '../Parentcheckbox';
import ItemList from './component/ItemList';
import MyComponent from './component/MyComponent';
import CounterWithUserInfo from './component/CounterWithUserInfo';
import Count from './component/Count';
import Spread from './component/Spread';
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
    <h2>count11</h2>
    <Count/>
     <h1>React Parent to Child Data</h1>
      <ParentComponent />
{/* ////////////////////////////////////////// */}

      <h2>Typing App</h2>
      <InputDisplay />
       <h2>timer</h2>
      <Timer/>
<h2>Check if Two Input Fields Match</h2>
<MatchInputs/>
<h2> Add Two Numbers on Button Click</h2>
<AddNumbers/>

<h2>checkbox</h2>
  <Parent />

  <h2>Map Over Array of Objects with Styling</h2>
  <ItemList/>
  <h2>Display Message on Component Mount</h2>
  <MyComponent/>
     <CounterWithUserInfo />

<h2>spreadoprator</h2>
     <Spread/>
    </>
  );
}

export default App;
