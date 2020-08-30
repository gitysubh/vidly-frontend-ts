import * as React from "react";
import { useMovies, useFilter } from "./hooks";
import MoviesTable from "../../components/movies-table";

const Movies: React.SFC = () => {
  const { movies } = useMovies();
  const { setFilter, getFilteredMovies } = useFilter(movies);

  return <MoviesTable movies={getFilteredMovies()} />;
};

export default Movies;
