// これはTopPageを表示している
import Link from "next/link";
import Image from "next/legacy/image";
import { client } from "../libs/client";
import SEO from "../components/layouts/SEO";
import Garrelys from "../components/gallerys/Gallerys";
import styles from "../styles/Home.module.scss";
import type { Article } from "../types/article";
import TopCarousel from "../components/home/TopCarousel";
import { Children } from "react";

type Props = {
  articles: Array<Article>;
};

export default function Home({ articles }: Props) {
  return (
    <>
      <SEO
        title={""}
        description={""}
        keyword={""}
        image={"/main_logo.png"}
        url={""}
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
                    <p>{article.totalCount}です</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Garrelys />
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
