import React from "react";
import styles from "./list.module.scss";

export default function AchievementList() {
  return (
    <>
      <div className={styles.list}>(外側で可変する)
        <div className={styles.listInner}>{/* position: relative;にするやつ */}
          <div>
            <div>
              <ul className={styles.listTitle}>
                <li className={styles.listMainTitle}>Title</li>
                <li className={styles.listSubTitle}>タイトル</li>  
              </ul>
            </div>
            <div>
              <ul className={styles.listContent}>
                <li className={styles.listDetailTitle}>中身</li>
                <li className={styles.listDetail}>中身</li>
              </ul>
              <ul className={styles.listContent}>
                <li className={styles.listDetailTitle}>中身</li>
                <li className={styles.listDetail}>中身</li>
              </ul>
              <ul className={styles.listContent}>
                <li className={styles.listDetailTitle}>中身</li>
                <li className={styles.listDetail}>中身</li>
              </ul>
              <ul className={styles.listContent}>
                <li className={styles.listDetailTitle}>中身</li>
                <li className={styles.listDetail}>中身</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
