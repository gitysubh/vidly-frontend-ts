import { useCallback } from "react";
import { TableHeadProps } from "../tableHead";

const useTableHead = ({ sortColumn, onSort }: TableHeadProps) => {

    const onRaiseSort = useCallback((path: string) => {
        if (sortColumn && sortColumn.path === path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn = { path, order: "asc" };
        }
        onSort(sortColumn);
    }, [])

    return { onRaiseSort }
};

export default useTableHead