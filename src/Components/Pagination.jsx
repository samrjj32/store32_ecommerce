import React from "react";

const Pagination = ({ postPerPage, totalPost, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        {pageNumbers.map((item) => (
          <li
            onClick={() => paginate(item)}
            key={item}
            className={`${currentPage == item ? "active" : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
