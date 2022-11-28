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
              <Link href="/gallery" passHref>
                gallery
              </Link>
            </li>
            <li>
              <Link href="/service" passHref>
                Service
              </Link>
            </li>
            <li>
              <Link href="/philosophy" passHref>
                Philosophy
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
            <Link href="/stylist" passHref>
              <p className={styles.mainTitle}>Gallery</p>
              <p className={styles.subTitle}>作品</p>
            </Link>
          </li>
          <li>
            <Link href="/service" passHref>
              <p className={styles.mainTitle}>Service</p>
              <p className={styles.subTitle}>サービス</p>
            </Link>
          </li>
          <li>
            <Link href="/philosophy" passHref>
              <p className={styles.mainTitle}>philosophy</p>
              <p className={styles.subTitle}>理念</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
