import React, { useState } from "react";
import {
  ButtonPage,
  PaginationComponent,
  UlPagination,
  LiPagination,
} from "./PaginationStyles";

function Pagination({
  driversPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / driversPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleNext() {
    if (currentPage !== pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
    console.log("aca next");
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  function handlePrev() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  }

  return (
    <PaginationComponent>
      <UlPagination>
        <ButtonPage onClick={handlePrev}>Prev</ButtonPage>
        {pageNumbers &&
          pageNumbers.map((page, i) => {
            if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
              return (
                <LiPagination key={i}>
                  <ButtonPage
                    className={currentPage === page ? "active" : ""}
                    onClick={() => paginate(page)}
                  >
                    {page}
                  </ButtonPage>
                </LiPagination>
              );
            } else {
              return null;
            }
          })}
        <ButtonPage onClick={handleNext}>Next</ButtonPage>
      </UlPagination>
    </PaginationComponent>
  );
}

export default Pagination;
