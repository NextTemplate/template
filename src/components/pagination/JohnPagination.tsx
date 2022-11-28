import React from "react";
import Link from "next/link";
import styles from "../../styles/Pagination/Pagination.module.scss";

export default function JohnPagination() {
  return (
    <>
      <div className={styles.nextFlex}>
        <div className={styles.next}>
          <Link href={"fujii"} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Back</span>
            </div>
          </Link>
        </div>
        <div className={styles.next}>
          <Link href={"dai"} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Next</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
