import React from "react";

type PaginationProps = {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="container">
      <div className="pagination">
        {pages?.map((page, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            style={{
              backgroundColor: index + 1 === currentPage ? "#183a1d" : "",
              color: index + 1 === currentPage ? "#e1eedd" : "",
              opacity: index + 1 === currentPage ? "0.7" : "",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
