import * as React from "react";
import { useMovies, useFilter } from "./hooks";
import MoviesTable from "../../components/movies-table";
import { genres } from "../../services/fakeGenreService";
import ListGroup from "../../components/list-group";
import Input from "../../components/input";
import { KeyboardEvent } from "react";

const Movies: React.SFC = () => {
  const { movies, genres } = useMovies();
  const {
    filter,
    onGenreClick,
    getFilteredMovies,
    onSearchMovie,
  } = useFilter();

  const filteredMovies = getFilteredMovies(movies);
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            textProperty="name"
            valueProperty="_id"
            selectedItem={filter.selectedGenre}
            onSelectItem={onGenreClick}
          />
        </div>

        <div className="col">
          {/* {user && user.isAdmin && (
            <button
              className="btn btn-primary mb-3"
              onClick={() => this.props.history.push("/movies/new")}
            >
              New Movie
            </button>
          )} */}
          <h6>{`Showing ${filteredMovies.length} movies from database`}</h6>

          <Input
            name="searchMovie"
            placeholder="Search..."
            onChange={(e: KeyboardEvent) =>
              onSearchMovie((e.target as HTMLInputElement).value)
            }
            value={filter.searchQuery}
          />

          <MoviesTable movies={filteredMovies} />

          {/* <Pagination
            count={totalCount}
            onPageChange={(pageNumber) => this.handlePageChange(pageNumber)}
            pageSize={this.pageSize}
            currentPage={this.state.currentPage}
          /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Movies;
