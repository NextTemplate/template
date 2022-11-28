import React from "react";
import Link from "next/link";
import styles from "../../styles/SNS/SNS.module.scss";

export default function YukaSNS() {
  return (
    <>
      <div className={styles.sns}>
        <Link href={"https://beauty.hotpepper.jp/slnH000524394/blog/"} passHref>
          <div className={styles.blog}></div>
        </Link>
        <Link href={"https://www.instagram.com/fujiwara__yuka/"} passHref>
          <div className={styles.instagram}></div>
        </Link>
        <Link href={"https://line.me/R/ti/p/%40740qgxwo"} passHref>
          <div className={styles.line}></div>
        </Link>
      </div>
    </>
  );
}
