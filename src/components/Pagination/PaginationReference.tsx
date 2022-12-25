import Link from "next/link";
import { PER_PAGE } from "../../settings/siteSettings";

type Props = {
  totalCount: number;
};

export default function Pagination({ totalCount }: Props) {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const pageCount = Math.ceil(totalCount / PER_PAGE);
  return (
    <>
      <div>
        {range(1, pageCount).map((number, index) => (
          <div key={index}>
            <Link href={`/article/${number}`} passHref>
              <button>{number}</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
