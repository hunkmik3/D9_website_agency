import Link from "next/link";
import React from "react";

const Pagination = ({ section, currentPage, totalPages }) => {
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;

  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  return (
    <>
      {totalPages > 1 && (
        <nav
          className="mb-4 mt-10 flex justify-center space-x-4"
          aria-label="Pagination"
        >
          {/* previous */}
          {hasPrevPage ? (
            <Link
              href={
                indexPageLink
                  ? `${section ? "/" + section : "/"}`
                  : `${section ? "/" + section : ""}/page/${currentPage - 1}`
              }
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-black text-black bg-white hover:bg-blue-100 hover:text-blue-700 transition-all text-xl font-bold"
            >
              <span className="sr-only">Previous</span>
              <span className="text-2xl">&#60;</span>
            </Link>
          ) : (
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-black text-black bg-white opacity-50 text-xl font-bold">
              <span className="sr-only">Previous</span>
              <span className="text-2xl">&#60;</span>
            </span>
          )}

          {/* page index */}
          {pageList.map((pagination, i) => (
            <React.Fragment key={`page-${i}`}>
              {pagination === currentPage ? (
                <span
                  aria-current="page"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-800 text-white border-2 border-blue-800 text-xl font-bold shadow"
                >
                  {pagination}
                </span>
              ) : (
                <Link
                  legacyBehavior={true}
                  href={
                    i === 0
                      ? `${section ? "/" + section : "/"}`
                      : `${section ? "/" + section : ""}/page/${pagination}`
                  }
                  passHref
                >
                  <a
                    aria-current="page"
                    className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black text-black bg-white hover:bg-blue-100 hover:text-blue-700 transition-all text-xl font-bold"
                  >
                    {pagination}
                  </a>
                </Link>
              )}
            </React.Fragment>
          ))}

          {/* next page */}
          {hasNextPage ? (
            <Link
              href={`${section ? "/" + section : ""}/page/${currentPage + 1}`}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-black text-black bg-white hover:bg-blue-100 hover:text-blue-700 transition-all text-xl font-bold"
            >
              <span className="sr-only">Next</span>
              <span className="text-2xl">&#62;</span>
            </Link>
          ) : (
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-black text-black bg-white opacity-50 text-xl font-bold">
              <span className="sr-only">Next</span>
              <span className="text-2xl">&#62;</span>
            </span>
          )}
        </nav>
      )}
    </>
  );
};

export default Pagination;
