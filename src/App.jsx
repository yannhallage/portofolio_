import React, { useState } from "react";
// import Mains from "./pages/mains";
import Router from './route/route'
import { Context } from './context/context'
import Alternative from "./alternative";



function App() {
  const [state ,setState] = useState(
    <Alternative />
  );
  return (
    <Context.Provider value={{ state, setState }}>
      <Router />
    </Context.Provider>
  );
}

export default App;
