import * as React from "react";
import { Movie } from "../../model/Movie";
import { useMoviesTable } from "./hooks/useMoviesTable";

export interface MoviesTableProps {
  movies: Movie[];
}

const MoviesTable: React.SFC<MoviesTableProps> = (props) => {
  const { getPagedMovies } = useMoviesTable(props.movies);

  return (
    <ul>
      {getPagedMovies().map((movie) => (
        <li>{movie.title}</li>
      ))}
    </ul>
    /* <Pagination
            count={totalCount}
            onPageChange={(pageNumber) => this.handlePageChange(pageNumber)}
            pageSize={this.pageSize}
            currentPage={this.state.currentPage}
          /> */
  );
};

export default MoviesTable;
