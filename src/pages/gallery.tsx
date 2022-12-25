// これはTopPageを表示している
import Router from "next/router";
import Link from "next/link";
import Image from "next/legacy/image";
import { client } from "../libs/client";
import SEO from "../components/layouts/SEO";
import type { Gallery } from "../types/gallery";
import styles from "../styles/Gallery/NewGallery.module.scss";

type Props = {
  gallerys: Array<Gallery>;
  totalCount: number;
};

const Gallery = ({ gallerys }: Props) => {
  return (
    <>
      <SEO
        title={"Gallery 〜作品集〜 | 野生のデザイナーのポートフォリオ"}
        description={"Tatsuya Ozawaのポートフォリオへようこそ。"}
        keyword={"キーワード"}
        image={"/main_logo.png"}
        url={"https://it-mee.netlify.app/gallery"}
      />
      <div className={styles.mainHome}>
        <div className={styles.stylistArea}>
          <h2 className={styles.stylistMainTitle}>Gallery</h2>
          <div className={styles.stylistMainTitleText}>作品一覧</div>

          <div className={styles.stylistColumn}>
            {gallerys.map((gallery) => (
              <div className={styles.container} key={gallery.id}>
                <Link
                  href={`/gallery/${gallery.id}`}
                  className={styles.card}
                  passHref
                >
                  <div className={`${styles.touch} ${styles.touch__1}`}></div>
                  <div className={`${styles.touch} ${styles.touch__2}`}></div>
                  <div className={`${styles.touch} ${styles.touch__3}`}></div>
                  <div className={`${styles.touch} ${styles.touch__4}`}></div>
                  <div className={`${styles.touch} ${styles.touch__5}`}></div>
                  <div className={`${styles.touch} ${styles.touch__6}`}></div>
                  <div className={`${styles.touch} ${styles.touch__7}`}></div>
                  <div className={`${styles.touch} ${styles.touch__8}`}></div>
                  <div className={`${styles.touch} ${styles.touch__9}`}></div>
                  <div className={styles.board}>
                    <Image
                      className={styles.stylistImage}
                      src={gallery.eye_catch.url}
                      objectFit="contain"
                      alt={gallery.title + "の画像です"}
                      width={1000}
                      height={1000}
                    />
                    <div className={styles.stylistSubTitle}>
                      <p>{gallery.title}</p>
                    </div>
                    <div className={styles.stylistTag}>
                      {gallery.tag && <span className="">#{gallery.tag}</span>}
                    </div>
                    <div className={styles.next}>
                      <div className={styles.nextInner}>
                        <span className={styles.nextInnerIn}>View More</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className={`${styles.circle} ${styles.circle__1}`}></div>
                <div className={`${styles.circle} ${styles.circle__2}`}></div>
                <div className={`${styles.circle} ${styles.circle__3}`}></div>
                <div className={`${styles.circle} ${styles.circle__4}`}></div>
                <div className={`${styles.circle} ${styles.circle__5}`}></div>
                <div className={`${styles.circle} ${styles.circle__6}`}></div>
                <div className={`${styles.circle} ${styles.circle__7}`}></div>
                <div className={`${styles.circle} ${styles.circle__8}`}></div>
                <div className={`${styles.circle} ${styles.circle__9}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "gallerys",
    queries: { limit: 20, offset: 0 },
  });

  return {
    props: {
      gallerys: data.contents,
    },
  };
};

export default Gallery;
