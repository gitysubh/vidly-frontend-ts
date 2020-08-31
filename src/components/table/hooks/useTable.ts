import { useState, useCallback } from "react";
import { TableState } from "../types";
import { TableProps } from "../table";
import { sortMovies } from "../../../Utils/movieFilter";
import { paginate } from './../../../Utils/movieFilter';

const useTable = (props: TableProps) => {
    const { data, pageSize } = props;

    const [state, setState] = useState<TableState>({ currentPage: 1 });

    const onSort = useCallback((sortColumn) => {
        setState(state => ({
            ...state,
            currentSortColumn: sortColumn,
        }));
    }, []);

    const onPaginate = useCallback((pageNumber) => {
        setState(state => ({
            ...state,
            currentPage: pageNumber
        }));
    }, []);

    const getPagedData = useCallback(() => {
        const sortedData = state.currentSortColumn ? sortMovies(data, state.currentSortColumn.path, state.currentSortColumn.order) : data;
        let pagedData = paginate(
            sortedData,
            state.currentPage,
            pageSize || 0
        );

        if (!pagedData.length && data.length) {
            const lastPage = Math.ceil(data.length / (pageSize || 1));
            pagedData = paginate(
                sortedData,
                lastPage,
                pageSize || 0
            );
            setState(state => ({ ...state, currentPage: lastPage }));
        }

        return pagedData;
    }, [data, state.currentPage, state.currentSortColumn, pageSize]);

    return { state, onSort, onPaginate, getPagedData };
};

export default useTable;

