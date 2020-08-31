import React, { Component } from "react";
import { Column, SortColumn } from "../../types";
import useTableHead from "./hooks/useTableHead";

export interface TableHeadProps {
  columns: Column[];
  sortColumn: SortColumn | undefined;
  onSort: (data: SortColumn) => any;
}

const TableHead: React.SFC<TableHeadProps> = (props: TableHeadProps) => {
  const { columns, sortColumn } = props;
  const { onRaiseSort } = useTableHead(props);
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            onClick={() => onRaiseSort(column.path)}
            className="clickable"
          >
            {column.name} {getSortIcon(column.path, sortColumn)}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHead;

const getSortIcon = (path: string, sortColumn?: SortColumn) => {
  if (!sortColumn) {
    return <></>;
  } else if (path === sortColumn.path) {
    return sortColumn.order === "asc" ? (
      <i className="fas fa-caret-up"> </i>
    ) : (
      <i className="fas fa-caret-down"> </i>
    );
  }
};
