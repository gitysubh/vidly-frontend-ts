import * as React from "react";
import { TableHead, TableBody } from "./components";
import { Column } from "./types";
import Pagination from "./components/pagination/pagination";
import useTable from "./hooks";

export interface TableProps {
  columns: Column[];
  data: any[];
  pageSize?: number;
}

const Table: React.SFC<TableProps> = React.memo((props: TableProps) => {
  const { columns, data, pageSize } = props;
  const { state, onSort, onPaginate, getPagedData } = useTable(props);

  const pagedData = getPagedData();
  return (
    <div>
      <table className="table">
        <TableHead
          columns={columns}
          sortColumn={state.currentSortColumn}
          onSort={onSort}
        />
        <TableBody data={pagedData} columns={columns} />
      </table>

      {pageSize && (
        <Pagination
          count={data.length}
          pageSize={pageSize}
          currentPage={state.currentPage}
          onPageChange={onPaginate}
        />
      )}
    </div>
  );
});

export default Table;
