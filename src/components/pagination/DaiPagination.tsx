import React from "react";
import Link from "next/link";
import styles from "../../styles/Pagination/Pagination.module.scss";

export default function DaiPagination() {
  return (
    <>
      <div className={styles.nextFlex}>
        <div className={styles.next}>
          <Link href={"john"} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Back</span>
            </div>
          </Link>
        </div>
        <div className={styles.next}>
          <Link href={"natsuki"} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Next</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
