import Link from "next/link";
import Image from "next/legacy/image";
import ToTopButton from "./ToTopButton";
import styles from "./UnderNotice.module.scss";

export default function UnderNotice() {
  return (
    <>
      <div className={styles.notice}>
        <div className={styles.flexA}>
          <div className={styles.box}>
            <Link href={"/"}>
              <button className={styles.iconButton}>
                <ul className={styles.inner}>
                  <li className={styles.innerMain_00}>&nbsp;</li>
                  <li className={styles.innerMain_01}>&nbsp;</li>
                  <li className={styles.innerMain_02}>Home</li>
                </ul>
              </button>
            </Link>
          </div>
          <div className={styles.box}>
            <Link href={"/about"}>
              <button className={styles.iconButton}>
                <ul className={styles.inner}>
                  <li className={styles.innerMain_03}>&nbsp;</li>
                  <li className={styles.innerMain_04}>&nbsp;</li>
                  <li className={styles.innerMain_05}>About</li>
                </ul>
              </button>
            </Link>
          </div>
          <div className={styles.box}>
            <Link href={"/gallery"}>
              <button className={styles.iconButton}>
                <ul className={styles.inner}>
                  <li className={styles.innerMain_06}>&nbsp;</li>
                  <li className={styles.innerMain_07}>&nbsp;</li>
                  <li className={styles.innerMain_08}>Gallery</li>
                  <li
                    className={`${styles.innerMain_08_01} ${styles.korokoro}`}
                  >
                    &nbsp;
                  </li>
                </ul>
              </button>
            </Link>
          </div>
          <div className={styles.box}>
            <Link href={"/vision"}>
              <button className={styles.iconButton}>
                <ul className={styles.inner}>
                  <li className={styles.innerMain_09}>&nbsp;</li>
                  <li className={styles.innerMain_10}>&nbsp;</li>
                  <li className={styles.innerMain_11}>Vision</li>
                </ul>
              </button>
            </Link>
          </div>
          <div className={styles.box}>
            <Link href={"/contact"}>
              <button className={styles.iconButton}>
                <ul className={styles.inner}>
                  <li className={styles.innerMain_12}>&nbsp;</li>
                  <li className={styles.innerMain_13}>&nbsp;</li>
                  <li className={styles.innerMain_14}>Contact</li>
                </ul>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
