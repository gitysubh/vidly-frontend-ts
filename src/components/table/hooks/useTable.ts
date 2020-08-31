import { useState, useCallback, useEffect } from "react";
import { TableState } from "../types";
import { TableProps } from "../table";
import { sortMovies } from "../../../Utils/movieFilter";
import { paginate } from './../../../Utils/movieFilter';

const useTable = (props: TableProps) => {
    const { data, pageSize } = props

    const [state, setState] = useState<TableState>({ currentPage: 1 })

    useEffect(() => {
        setState(state => ({ ...state, currentPage: 1 }))
    }, [data])

    const onSort = useCallback((sortColumn) => {
        setState(state => ({
            ...state,
            currentSortColumn: sortColumn,
        }))
    }, []);

    const onPaginate = useCallback((pageNumber) => {
        setState(state => ({
            ...state,
            currentPage: pageNumber
        }))
    }, []);

    const getPagedData = useCallback(() => {
        const sortedData = state.currentSortColumn ? sortMovies(data, state.currentSortColumn.path, state.currentSortColumn.order) : data;
        const pagedData = paginate(
            sortedData,
            state.currentPage,
            pageSize || 1
        );
        return pagedData
    }, [data, state.currentPage, state.currentSortColumn]);

    return { state, onSort, onPaginate, getPagedData }
}

export default useTable;

