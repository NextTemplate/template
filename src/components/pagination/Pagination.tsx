import Link from "next/link";

export const Pagination = ({ maxPageNumber, currentPageNumber }: any) => {
  currentPageNumber = Number(currentPageNumber);
  maxPageNumber = Number(maxPageNumber);
  const prevPage = currentPageNumber - 1;
  const nextPage = currentPageNumber + 1;

  return (
    <div className="">
      {currentPageNumber !== 1 && (
        <Link href={`/article/${prevPage}`}>
          <a>Previous</a>
        </Link>
      )}
      {currentPageNumber !== maxPageNumber && (
        <Link href={`/article/${nextPage}`}>
          <a className="">Next</a>
        </Link>
      )}
    </div>
  );
};
