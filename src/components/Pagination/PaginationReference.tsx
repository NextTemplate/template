import React from "react";
import Link from 'next/link';

interface PaginationProps {
  maxPageNumber: number;
  currentPageNumber: number;
}

export const Pagination: React.FC<PaginationProps> = ({ maxPageNumber, currentPageNumber }) => {
  currentPageNumber = Number(currentPageNumber);
  maxPageNumber = Number(maxPageNumber);
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  return (
    <>
      <div className="flex px-3 my-12">
        {currentPageNumber !== 1 && (
          <Link href={`/pages/gallery/${prevPage}`}>
            <a>&lt; Previous</a>
          </Link>
        )}
        {currentPageNumber !== maxPageNumber && (
          <Link href={`/pages/gallery/${nextPage}`}>
            <a className="ml-4">Next &gt;</a>
          </Link>
        )}
      </div>
    </>
  );
};
