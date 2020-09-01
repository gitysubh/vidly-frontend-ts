import _ from "lodash";
import { Movie } from "../model/Movie";
import { Genre } from "../model/Genre";

export function paginate<T>(items: T[], pageNumber: number, pageSize: number): T[] {
    if (!pageSize)
        return items;
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex, items.length).take(pageSize).value();
}

export function genreFilter(movies: Movie[], genre: Genre): Movie[] {
    if (movies && Array.isArray(movies) && genre && genre._id)
        return movies.filter((movie) => movie.genre._id === genre._id);
    else return movies;
}

export function sortMovies(movies: Movie[], path: string, order: "asc" | "desc"): Movie[] {
    return _.orderBy(movies, path, order);
}

export function searchFilter(movies: Movie[], query: string): Movie[] {
    const result = _.filter(movies, (m) =>
        m.title.toLowerCase().includes(query.toLowerCase())
    );
    return result;
}
