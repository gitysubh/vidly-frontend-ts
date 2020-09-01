import * as React from "react";
import { Movie } from "../../model/Movie";
import { useMoviesTable } from "./hooks/useMoviesTable";
import Table from "../table";
import { Link } from "react-router-dom";

export interface MoviesTableProps {
  movies: Movie[];
}
const columns = [
  {
    path: "title",
    name: "Title",
    content: (movie: Movie) =>
      // user && user.isAdmin ? (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
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
  // {
  //   key: "like",
  //   content: (movie:Movie) => (
  //     <Like
  //       isLiked={movie.isLiked}
  //       onClick={() => onLike(movie._id)}
  //     />
  //   ),
  // },
];
const MoviesTable: React.SFC<MoviesTableProps> = (props) => {
  const { getPagedMovies } = useMoviesTable(props.movies);
  return <Table columns={columns} pageSize={4} data={getPagedMovies()} />;
};

export default MoviesTable;
