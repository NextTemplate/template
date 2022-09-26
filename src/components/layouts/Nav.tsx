import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Accordion from "./Accordion";
import styles from "../../styles/Layouts/Nav.module.scss";

export default function Nav(props: any) {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  const data = props.list;
  console.log(data);

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={styles.mainNav}>
      <div className={styles.navImageArea}>
        <Link href={"/"}>
          <a>
            <Image
              className={styles.navImage}
              src={"/"}
              objectFit="contain"
              alt="GOOD-DAY_MainLogo"
              width={64}
              height={64}
            />
          </a>
        </Link>
      </div>
      <div className={styles.navRow}>
        <div className={styles.navRowCharacter}>
          <Link href={"/"} passHref>
            <a className={styles.navRowCharacterSingle}>Home</a>
          </Link>
          <Link href={"/gallery"} passHref>
            <a className={styles.navRowCharacterSingle}>Gallery</a>
          </Link>
          <Link href={"/service"} passHref>
            <a className={styles.navRowCharacterSingle}>service</a>
          </Link>
          <Link href={"/recruit"} passHref>
            <a className={styles.navRowCharacterSingle}>Recruit</a>
          </Link>
          <Link href={"/campany"} passHref>
            <a className={styles.navRowCharacterSingle}>Company</a>
          </Link>
        </div>
      </div>
      <div className={styles.hamburgerMenu}>
        <div className={styles.hamburgerArea}>
          <button
            className={styles.hamburgerButton}
            onClick={menuFunction}
          ></button>
        </div>
      </div>
    </div>
  );
}
