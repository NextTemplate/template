// components/Pagination.tsx
import Link from 'next/link';
import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page) => (
        <Link key={page} href={`/page/${page}`} passHref>
          <p className={page === currentPage ? 'active' : ''}>{page}</p>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
