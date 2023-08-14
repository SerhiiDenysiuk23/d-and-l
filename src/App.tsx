import React, {useReducer} from 'react';
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import {BrowserRouter} from "react-router-dom";
import Content from "./components/common/Content";
import reducer, {initState} from "./store/reducer";
import {State} from "./types/Store";
import {Action} from "./types/Category";

interface ContextType {
  state: State,
  dispatch: React.Dispatch<Action<any>>
}

const contextInitState: ContextType = {
  state: initState,
  dispatch: () => null
}

export const StateContext = React.createContext<ContextType>(contextInitState);

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <BrowserRouter>
      <StateContext.Provider value={{state, dispatch}}>
        <Header/>
        <Content/>
        <Footer/>
      </StateContext.Provider>
    </BrowserRouter>
  );
}

export default App;
