import React from "react";
import Link from "next/link";
import styles from "../../styles/SNS/SNS.module.scss";

export default function IkemotoSNS() {
  return (
    <>
      <div className={styles.sns}>
        <Link href={"https://beauty.hotpepper.jp/slnH000524394/blog/"} passHref>
          <div className={styles.blog}></div>
        </Link>
        <Link href={"/"} passHref>
          <div className={styles.instagram}></div>
        </Link>
        <Link href={"/"} passHref>
          <div className={styles.line}></div>
        </Link>
      </div>
    </>
  );
}
