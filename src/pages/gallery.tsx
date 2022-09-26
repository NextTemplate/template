// これはTopPageを表示している
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import SEO from "../components/layouts/SEO";
import type { Gallery } from "../types/gallery";
import styles from "../styles/Stylist/Stylist.module.scss";
import HamburgerMenu from "../components/layouts/HamburgerMenu";

type Props = {
  gallerys: Array<Gallery>;
};

export default function Gallery({ gallerys }: Props) {
  return (
    <>
      <SEO
        title={""}
        description={""}
        keyword={""}
        image={"/main_logo.png"}
        url={""}
      />
      <HamburgerMenu />
      <div className={styles.mainHome}>
        <div className={styles.stylistArea}>
          <h2 className={styles.stylistMainTitle}>Gallery</h2>
          <div className={styles.stylistMainTitleText}>作品一覧</div>
          <div className={styles.stylistColumn}>
            {gallerys.map((gallery) => (
              <div className={styles.stylistSingle} key={gallery.id}>
                <p>
                  <Image
                    src={gallery.eye_catch.url}
                    objectFit="contain"
                    alt={gallery.title + "の画像です"}
                    width={1000}
                    height={1000}
                  />
                </p>
                <div className={styles.stylistSubTitle}>
                  <p>{gallery.title}</p>
                </div>
                <div className={styles.stylistTag}>
                  {gallery.tag && <span className="">#{gallery.tag}</span>}
                </div>
                <div className={styles.next}>
                  <Link href={`/gallery/${gallery.id}`} passHref>
                    <a className={styles.nextInner}>
                      <span className={styles.nextInnerIn}>View More</span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

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
