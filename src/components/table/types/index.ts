export type Column = { name: string;[x: string]: any } & (
    | { key: string }
    | { path: string }
);

export type SortColumn = { path: string; order: "asc" | "desc" };

export type TableState = {
    currentPage: number;
    currentSortColumn?: SortColumn;
}