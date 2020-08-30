import { Genre } from "./Genre";

export interface Movie {
    _id: string;
    title: string
    numberInStock: number,
    dailyRentalRate: number,
    genre: Genre,
    isLiked: boolean
}
