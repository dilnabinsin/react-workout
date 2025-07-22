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
import Props from './component/Props';
import CustomButton from './component/CustomButton';
import UseSExa from './component/UseSExa';
import "./app.css"
import Basic from './component/Basic';
import ParentToggle from './component/Parent1';
import Parent1 from './component/Parent1';
import Checkbox from './component/Checkbox';

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
<h2>Reading Input Value</h2>
    <Userefinput/>
   

    {/* ////////////////////////////// */}
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

<h2>checkboxaaaaaaaaaa</h2>
  <Parent />
<h2>checkboxaaaaaaa</h2>
  <h2>Map Over Array of Objects with Styling</h2>
  <ItemList/>
  <h2>Display Message on Component Mount</h2>
  <MyComponent/>
     <CounterWithUserInfo />

<h2>spreadoprator</h2>
     <Spread/>


     <h2>props</h2>
     <Props name="Dilna"/>
       <Props name="riva"/>
       <h2>customecomponent</h2>
       <CustomButton/>
       <h2>Dependencies of useEffect</h2>
       <UseSExa/>
<Checkbox/>
 <Basic/>

    </>
  );
}

export default App;
