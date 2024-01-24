import { useState } from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import MovieList from "./cine/MovieList";
import { MovieContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
      </MovieContext.Provider>
    </>
  );
}

export default App;
