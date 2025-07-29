//app.jsx 

import React, { createContext, useReducer, useContext } from "react";

// 1. Create Context
const AppContext = createContext();

// 2. Define Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// 3. Create Provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user: null });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// 4. Component Consuming Context
const UserComponent = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome {state.user || "Guest"}</h2>
      <button onClick={() => dispatch({ type: "SET_USER", payload: "John" })}>
        Login as John
      </button>
    </div>
  );
};

// 5. App Component
const App = () => (
  <AppProvider>
    <UserComponent />
  </AppProvider>
);

export default App;
