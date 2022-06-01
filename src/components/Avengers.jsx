import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import MovieSpecialBar from "./MovieSpecialBar";


export default function Avengers() {
  const [movies, setMovies] = useState([]);
  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=Avengers&apikey=235f8977`;
    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
  };
  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div>
    <MovieSpecialBar />
    <div className="body">
    <MovieList movies={movies} />
    </div>
  </div>
  );
}
