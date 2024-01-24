import React from "react";
import { getAllMovies } from "../data/movies";
import { imgUrl } from "../utils/cine-utility";

const MovieList = () => {
  const movies = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {/* <!-- Begin Card --> */}
        {movies.map((movie) => (
          <MovieList movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
