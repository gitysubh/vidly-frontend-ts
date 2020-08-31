import * as React from "react";
import { Movie } from "../../model/Movie";
import { useMoviesTable } from "./hooks/useMoviesTable";
import Table from "../table";
import { Link } from "react-router-dom";
import Like from "../like";

export interface MoviesTableProps {
  movies: Movie[];
}

const MoviesTable: React.SFC<MoviesTableProps> = React.memo((props) => {
  const { onLikeMovie, onDeleteMovie } = useMoviesTable(props.movies);

  const columns = [
    {
      path: "title",
      name: "Title",
      content: (movie: Movie) => (
        // user && user.isAdmin ? (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
      // ) : (
      //   <span>{movie.title}</span>
      // ),
    },
    {
      path: "genre.name",
      name: "Genre",
    },
    {
      path: "numberInStock",
      name: "Stock",
    },
    {
      path: "dailyRentalRate",
      name: "Rate",
    },
    {
      key: "like",
      name: "Like",
      content: (movie: Movie) => (
        <Like
          isLiked={!!movie.isLiked}
          onClick={() => onLikeMovie(movie._id)}
        />
      ),
    },
  ];

  const deleteColumn = {
    key: "delete",
    name: "Delete",
    content: (movie: Movie) => {
      return (
        <button
          onClick={() => onDeleteMovie(movie._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      );
    },
  };

  columns.push(deleteColumn);

  return <Table columns={columns} pageSize={4} data={props.movies} />;
});

export default MoviesTable;
