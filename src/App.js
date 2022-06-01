import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import TopNavbar from "./components/TopNavbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async (movieName) => {
    const url = `http://www.omdbapi.com/?s=${movieName}&apikey=235f8977`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div>
      <div className="topnavbar">
      <TopNavbar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="body">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
