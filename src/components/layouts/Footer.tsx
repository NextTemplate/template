import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Layouts/Footer.module.scss";
import ToTopButton from "../home/ToTopButton";
import UnderNotice from "../home/UnderNotice";
import data from "../../data/shops.json";

export default function Footer() {
  const nakashima = data.nakashima;
  const noda = data.noda;
  return (
    <footer className={`${styles.mainFooter} ${styles.animeBody}`}>
      <ToTopButton />
      <UnderNotice />
      <div className={styles.footerContents}>
        <div className={styles.footerBrock}>
          <Link href={"/"} passHref>
            <Image
              className={styles.footerImage}
              src={"/main_logo.png"}
              alt={"GOOD-DAY メインロゴ"}
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/stylist"} passHref>
            <p className={styles.footerTitle}>Gallerys</p>
          </Link>
          <div className={styles.footerUl}>
            {nakashima.map((shop) => {
              return (
                <ul key={shop.shop_id}>
                  <Link href={`/company/${shop.url}`} passHref>
                    <li>{shop.name}</li>
                  </Link>
                </ul>
              );
            })}
          </div>
          <div className={styles.footerUl}>
            {noda.map((shop) => {
              return (
                <ul key={shop.shop_id}>
                  <Link href={`/company/${shop.url}`} passHref>
                    <li>{shop.name}</li>
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/about"} passHref>
            <p className={styles.footerTitle}>About</p>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/about"} passHref>
              <li>リンク</li>
            </Link>
            <Link href={"/about"} passHref>
              <li>リンク</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/gallery"} passHref>
            <p className={styles.footerTitle}>Gallery</p>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/gallery"} passHref>
              <li>リンク</li>
            </Link>
            <Link href={"/gallery"} passHref>
              <li>リンク</li>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/philosophy"} passHref>
            <p className={styles.footerTitle}>Philosophy</p>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/philosophy"} passHref>
              <li>大切にしたいこと</li>
            </Link>
          </ul>
        </div>
      </div>
      {/* <div className={styles.rules}>
        <p className={styles.footerTitle}>Webサイトのご利用について</p>
        <div>
          <ul className={styles.footerContentsEven}>
            <Link href={"/sitepolicy"} passHref>
              <li>Webサイトの利用条件</li>
            </Link>
            <Link href={"/privacypolicy"} passHref>
              <li>プライバシーポリシー</li>
            </Link>
          </ul>
        </div>
      </div> */}
      <p className={styles.footerCopyLight}>&copy; 2022 it-me.</p>
    </footer>
  );
}

export const getStaticProps = async () => {
  return {
    props: data,
  };
};
