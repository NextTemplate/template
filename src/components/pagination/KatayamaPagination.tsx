import React from "react";
import Link from "next/link";
import styles from "../../styles/Pagination/Pagination.module.scss";

export default function KatayamaPagination() {
  return (
    <>
      <div className={styles.nextFlex}>
        <div className={styles.next}>
          <Link href={"mika"} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Back</span>
            </div>
          </Link>
        </div>
        <div className={styles.next}>
          <Link href={"tomoya"} passHref>
            <div className={styles.nextInner}>
              <span className={styles.nextInnerIn}>Next</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
