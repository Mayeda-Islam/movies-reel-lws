/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { imgUrl } from "../utils/cine-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";

const MovirCart = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);
  const handleMovieSelection = (movie) => {
    setShowModal(true);
    setSelectedMovie(movie);
  };
  //   cart function
  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const found = state.cartData.find((item) => {
      return item?.id === movie.id;
    });
    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
    } else {
      console.error(`The movie ${movie.title}is already have in cart`);
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          selectedMovie={selectedMovie}
          onclose={() => setShowModal(false)}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure
        key={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={imgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovirCart;
