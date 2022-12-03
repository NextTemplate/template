import Link from "next/link";
import Image from "next/legacy/image";
import React, { useState } from "react";
import styles from "../../styles/Layouts/HamburgerMenu.module.scss";

export default function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <header id="header" className={styles.header}>
        <div className={styles.logo}>
          <Link href={"/"} passHref>
            <Image
              className={styles.navImage}
              src={"/main_logo.png"}
              alt="MainLogo"
              width={56}
              height={56}
            />
          </Link>
        </div>
        <nav className={styles.navPC}>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                About
              </Link>
            </li>
            <li>
              <Link href="/gallery" passHref>
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div
        className={`${styles.drawerMenu}
        ${openMenu ? styles.open : undefined}`}
      >
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          <li>
            <Link href="/" passHref>
              <p className={styles.mainTitle}>Home</p>
              <p className={styles.subTitle}>ホーム</p>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <p className={styles.mainTitle}>About</p>
              <p className={styles.subTitle}>私について</p>
            </Link>
          </li>
          <li>
            <Link href="/gallery" passHref>
              <p className={styles.mainTitle}>Gallery</p>
              <p className={styles.subTitle}>作品一覧</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
