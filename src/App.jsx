import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import MovieList from "./cine/MovieList";

function App() {
  return (
    <>
      <Header />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <MovieList />
      </div>
    </>
  );
}

export default App;
