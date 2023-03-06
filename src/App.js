import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import Component2 from './Component2';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}
export default App;