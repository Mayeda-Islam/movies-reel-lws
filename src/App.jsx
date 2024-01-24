import { useReducer, useState } from "react";
import "./App.css";

import { MovieContext, ThemeContext } from "./context";
import Page from "../src/Page";
import CartReducers, { initialState } from "./reducers/CartReducers";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(CartReducers, initialState);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
