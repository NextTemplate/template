// これはTopPageを表示している
import Link from "next/link";
import Image from "next/legacy/image";
import { client } from "../libs/client";
import SEO from "../components/layouts/SEO";
import styles from "../styles/Home.module.scss";
import type { Article } from "../types/article";
import Button from "../components/layouts/Button";
import Garrelys from "../components/gallerys/Gallerys";
import TopCarousel from "../components/home/TopCarousel";

import Pagination from "../components/Pagination/";

import MiniCarousel from "../components/home/MiniCarousel";
import CustomSlick from "../components/Slick/Slick";

type Props = {
  articles: Array<Article>;
  totalCount: number;
};

// Inside Home component
const ITEMS_PER_PAGE = 3;

export default function Home({ articles, totalCount }: Props) {
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const currentPage = 1; // Assuming the first page as default

  return (
    <>
      <SEO
        title={"It's Me !! | 野生のデザイナーのポートフォリオ"}
        description={"Tatsuya Ozawaのポートフォリオへようこそ。"}
        keyword={"キーワード"}
        image={"/main_logo.png"}
        url={"https://it-mee.netlify.app/"}
      />
      <div className={styles.mainHome}>
        <TopCarousel />
        <div className={styles.articleArea}>
          <h2 className={styles.articleMainTitle}>News &amp; Topics</h2>
          {articles.map((article) => (
            <div className={styles.articleSingle} key={article.id}>
              <div className={styles.articleFlex}>
                <div className={styles.articleLeft}>
                  <Link href={`/article/${article.id}`} passHref>
                    <Image
                      className={styles.articleImage}
                      src={article.eye_catch.url}
                      alt={article.title + "の画像です"}
                      width={240}
                      height={240}
                      objectFit={"contain"}
                    />
                  </Link>
                </div>
                <div className={styles.articleRight}>
                  <div className={styles.articleSubTitle}>
                    <Link href={`/article/${article.id}`} passHref>
                      {article.title}
                    </Link>
                  </div>
                  {/* Prevent HTML tags from being output */}
                  <Link href={`/article/${article.id}`} passHref>
                    <div className={styles.articleBody}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${article.body}`,
                        }}
                      />
                    </div>
                  </Link>
                  <div className={styles.articleTag}>
                    {article.tag && <p className="">#{article.tag}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
        <Garrelys />
        <Link href={"/gallery"} passHref>
          <Button props={"View More"} />
        </Link>
        <MiniCarousel />
        <CustomSlick />
        <div>
          <p></p>
        </div>
      </div>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "articles",
    queries: { limit: 3, offset: 0 },
  });

  return {
    props: {
      articles: data.contents,
      totalCount: data.totalCount,
    },
  };
};
