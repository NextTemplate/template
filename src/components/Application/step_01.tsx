// STEP1
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Application/Application.module.scss";

export default function Step_01() {
  const ApplicationItems = {
    src: "/media/step_00.png",
    alt: "総合制作会社",
    title: "総合制作会社",
    text: "東京都菊川にある総合制作会社にてインハウスデザイナーとして勤務。この時WordPressに触れ本格的にwebデザイナーとして働きたい気持ちが芽生えてきました。",
    subTitle_00: "キャラクタービジネス",
    subText_00:
      "某テーマパーク、有名おもちゃ、球団などで使用されるキャラクターに関わるデザイン業務を担当。",
    subTitle_01: "プレゼン用資料制作",
    subText_01:
      "Illustrator, PowerPointを使用し、おもちゃ、イベント、舞台などの資料を作成しました。",
  };
  const ArrowImageSP = {
    src: "/media/step_04.png",
    alt: "矢印",
  };
  return (
    <>
      <div className={styles.applicationArea}>
        <div className={styles.applicationTopArea}>
          <div className={styles.applicationTopImg}>
            <Image
              className=""
              src={ApplicationItems.src}
              alt=""
              width={300}
              height={300}
              objectFit="contain"
            />
          </div>
          <h2 className={styles.applicationTopTitle}>
            {ApplicationItems.title}
          </h2>
          <p className={styles.applicationTopText}>{ApplicationItems.text}</p>
        </div>
        <div className={styles.applicationUnderArea}>
          <div className={styles.applicationUnderLeft}>
            <h3 className={styles.applicationUnderTitle}>
              {ApplicationItems.subTitle_00}
            </h3>
            <p className={styles.applicationUnderText}>
              {ApplicationItems.subText_00}
            </p>
          </div>
          <div className={styles.applicationUnderRight}>
            <h3 className={styles.applicationUnderTitle}>
              {ApplicationItems.subTitle_01}
            </h3>
            <p className={styles.applicationUnderText}>
              {ApplicationItems.subText_01}
            </p>
          </div>
          <div className={styles.allowImageSP}>
            <Image
              src={ArrowImageSP.src}
              alt={ArrowImageSP.alt}
              width={100}
              height={100}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
