import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Layouts/Footer.module.scss";
import ToTopButton from "../home/ToTopButton";
import UnderNotice from "../../components/home/UnderNotice";

export default function Footer() {
  return (
    <footer className={styles.mainFooter}>
      <ToTopButton />
      <UnderNotice />
      <div className={styles.footerContents}>
        <div className={styles.footerBrock}>
          <Link href={"/"} passHref>
            <a>
              <Image
                className=""
                src={"/main_logo.png"}
                objectFit="contain"
                alt={"メインロゴ"}
                width={80}
                height={80}
              />
            </a>
          </Link>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/gallery"} passHref>
            <a>
              <p className={styles.footerTitle}>Gallery</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/gallery"} passHref>
              <a>
                <li>倉敷中島店</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/service"} passHref>
            <a>
              <p className={styles.footerTitle}>Service</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/service/#Customer"} passHref>
              <a>
                <li>お客様へ</li>
              </a>
            </Link>
            <Link href={"/service/#ToStylist"} passHref>
              <a>
                <li>スタイリスト向け</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/philosophy"} passHref>
            <a>
              <p className={styles.footerTitle}>Philosophy</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/philosophy"} passHref>
              <a>
                <li>大切にしたいこと</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.footerBrock}>
          <Link href={"/company"} passHref>
            <a>
              <p className={styles.footerTitle}>Contact</p>
            </a>
          </Link>
          <ul className={styles.footerUl}>
            <Link href={"/company/#NewShop"} passHref>
              <a>
                <li>テスト</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.rules}>
        <p className={styles.footerTitle}>Webサイトのご利用について</p>
        <div>
          <ul className={styles.footerContentsEven}>
            <Link href={"/sitepolicy"} passHref>
              <a>
                <li>Webサイトの利用条件</li>
              </a>
            </Link>
            <Link href={"/privacypolicy"} passHref>
              <a>
                <li>プライバシーポリシー</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
      <p className={styles.footerCopyLight}>&copy; 2022 It&apos;s Me.</p>
    </footer>
  );
}
