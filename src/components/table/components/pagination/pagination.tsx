import * as React from "react";
import _ from "lodash";

export interface PaginationProps {
  count: number;
  pageSize: number;
  onPageChange: (pageNumber: number) => any;
  currentPage: number;
}

const Pagination: React.SFC<PaginationProps> = (props) => {
  const { count, pageSize, onPageChange, currentPage } = props;

  if (!count) return <></>;
  const numberOfPage = Math.ceil(count / pageSize);
  const pageArr = _.range(1, numberOfPage + 1);

  if (numberOfPage < 1) return <></>;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageArr.map((pageNo) => (
          <li
            className={"page-item" + (currentPage === pageNo ? " active" : "")}
            key={pageNo}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(pageNo)}
            >
              {pageNo}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
