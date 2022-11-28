import React from "react";
import Link from "next/link";
import styles from "../../styles/SNS/SNS.module.scss";

export default function MikaSNS() {
  return (
    <>
      <div className={styles.sns}>
        {/* <Link href={"/"} passHref>
          <div className={styles.blog}></div>
        </Link> */}
        <Link href={"https://www.instagram.com/mi._.ka._.22"} passHref>
          <div className={styles.instagram}></div>
        </Link>
        <Link href={"https://line.me/R/ti/p/%40980gkidl"} passHref>
          <div className={styles.line}></div>
        </Link>
      </div>
    </>
  );
}
