import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Layouts/Footer.module.scss";
import ToTopButton from "../home/ToTopButton";
import UnderNotice from "../home/UnderNotice";
import data from "../../data/footer.json";

export default function Footer() {
  const about = data.about;
  const gallery = data.gallery;
  const vision = data.vision;
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
              alt={"メインロゴ"}
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/about"} passHref>
            <p className={styles.footerTitle}>About</p>
          </Link>
          {/* <ul className={styles.footerUl}>
            <Link href={"/about"} passHref>
              <li>リンク</li>
            </Link>
            <Link href={"/about"} passHref>
              <li>リンク</li>
            </Link>
          </ul> */}
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/gallery"} passHref>
            <p className={styles.footerTitle}>Gallery</p>
          </Link>
          {/* <ul className={styles.footerUl}>
            <Link href={"/gallery"} passHref>
              <li>リンク</li>
            </Link>
            <Link href={"/gallery"} passHref>
              <li>リンク</li>
            </Link>
          </ul> */}
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
      <p className={styles.footerCopyLight}>&copy; 2022 it-mee.</p>
    </footer>
  );
}

export const getStaticProps = async () => {
  return {
    props: data,
  };
};
