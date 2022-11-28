import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Layouts/Info.module.scss";

export default function Info() {
  return (
    <>
      <div className={styles.infoArea}>
        <div>
          <h2 className={styles.infoTitle}>Info</h2>
        </div>
        <div className={styles.infoMain}>
          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <th className={styles.infoSubTitle}>住所</th>
                <td className={styles.infoTd}>〒710-0803 岡山県倉敷市中島</td>
              </tr>
              <tr>
                <th className={styles.infoSubTitle}>電話番号</th>
                <td className={styles.infoTd}>
                  <a href="tel:086-454-7373" className={styles.infoA}>
                    086-454-7373
                  </a>
                </td>
              </tr>
              <tr>
                <th className={styles.infoSubTitle}>営業時間</th>
                <td className={styles.infoTd}>09:00〜24:00</td>
              </tr>
              <tr>
                <th className={styles.infoSubTitle}>定休日</th>
                <td className={styles.infoTd}>不定休</td>
              </tr>
              <tr>
                <th className={styles.infoSubTitle}>アクセス</th>
                <td className={styles.infoTd}>
                  ※水島臨海鉄道「西富井駅」より徒歩10分
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.buttonArea}>
          <Link href={"/"}>
            <button className={styles.infoButton}>Web予約はこちらから</button>
          </Link>
        </div>
      </div>
    </>
  );
}
