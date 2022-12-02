import Link from "next/link";
import Image from "next/legacy/image";
import SEO from "../components/layouts/SEO";
import styles from "../styles/Stylist/Detail.module.scss";

export default function Custom404() {
  return (
    <>
      <SEO
        title={"ページがありません| page is notfound"}
        description={"こちらは普段は表示されないページです"}
        keyword={"404"}
        image={"/media/404notfound_00.png"}
        url={""}
      />
      <main className={styles.detailArea}>
        <div className={styles.detail404Text}>
          <div>
            <h2 className={styles.detailSubTitle}>ページが見つかりません</h2>
          </div>
          <div>
            <p className={styles.detailSubTitle}>
              お探しのページは、移動または削除された可能性があります。
            </p>
          </div>
        </div>
        <div className={styles.detailImage}>
          <Image
            className=""
            src={"/media/404notfound_00.png"}
            alt={"ページがありません。"}
            width={2000}
            height={1250}
          />
        </div>
        <div className={styles.next}>
          <Link href={"/"} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Topに戻る</span>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
