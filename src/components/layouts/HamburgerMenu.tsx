import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Layouts/HamburgerMenu.module.scss";
import { scaleRotate as Menu } from "react-burger-menu";

const HamburgerMenu: React.FC = () => {
  let isMenuOpen = (state: any) => {
    return state.isOpen;
  };
  return (
    <>
      <Menu
        customBurgerIcon={
          <Image
            src="/media/gear_00.png"
            alt=""
            height={100}
            width={100}
            objectFit={"contain"}
          />
        }
        customCrossIcon={
          <Image
            src="/media/gear_04.png"
            alt=""
            height={100}
            width={100}
            objectFit={"contain"}
          />
        }
        burgerButtonClassName={styles.burgerButton}
        burgerBarClassName={styles.burgerBars}
        crossButtonClassName={styles.crossButton}
        crossClassName={styles.cross}
        menuClassName={styles.burgerMenu}
        morphShapeClassName={styles.morphShape}
        itemListClassName={styles.itemList}
        overlayClassName={styles.overlay}
        onStateChange={isMenuOpen}
        pageWrapId={"page-wrap"}
        width={"50%"}
      >
        <div id="page-wrap">
          <ul className={styles.items}>
            <li className={styles.itemsBrock}>
              <Link href="/" passHref>
                <p className={styles.itemsTitle}>Home</p>
                <p className={styles.itemsSubTitle}>ホーム</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="/about" passHref>
                <p className={styles.itemsTitle}>About</p>
                <p className={styles.itemsSubTitle}>私について</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="/gallery" passHref>
                <p className={styles.itemsTitle}>Gallery</p>
                <p className={styles.itemsSubTitle}>作品一覧</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="/gallery" passHref>
                <p className={styles.itemsTitle}>Vision</p>
                <p className={styles.itemsSubTitle}>目指す方向</p>
              </Link>
            </li>
            <li className={styles.itemsBrock}>
              <Link href="/gallery" passHref>
                <p className={styles.itemsTitle}>Contact</p>
                <p className={styles.itemsSubTitle}>コンタクト</p>
              </Link>
            </li>
          </ul>
        </div>
      </Menu>
    </>
  );
};

export default HamburgerMenu;
