import React from "react";
import MovieListCard from "./MovieListCard";

export default function MovieList(props) {
  return (
    <div>
      <div class="container">
        <div class="row">
          {props.movies.map((movie) => {
            return (
              <div  class="col-md-4 mt-4">
                <MovieListCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
