import React from "react";
import _ from "lodash";
import { Column } from "../../types";

export interface TableBodyProps {
  data: { [x: string]: any }[];
  columns: Column[];
}

const TableBody: React.SFC<TableBodyProps> = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row._id}>
          {columns.map((column) => (
            <td key={getKey(row, column)}>{renderCell(row, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

function renderCell(item: any, column: Column) {
  if (column.content) {
    return column.content(item);
  } else {
    return _.get(item, column.path);
  }
}

function getKey(row: any, column: Column) {
  return row._id + (column.path || column.key);
}
