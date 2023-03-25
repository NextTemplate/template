// STEP4
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Application/Application.module.scss";

export default function Step_04() {
  const ApplicationItems = {
    src: "/media/step_05.png",
    alt: "これから",
    title: "これから",
    text: "デザイナーとしての経験値を底上げしつつ、プログラムへの理解を深めていきたいです。",
    subTitle_00: "競技プログラミング",
    subText_00:
      "アルゴリズムの理解を深めるため競技プログラミングに挑戦中です。C++を書いています。",
    subTitle_01: "マイブーム",
    subText_01:
      "パチンコの演出に使用される通称「パチンコ文字」や、ゲームバナーに使用される文字や素材を作っています。",
  };
  return (
    <>
      <div className={styles.applicationArea}>
        <div className={styles.applicationTopArea}>
          <div className={styles.applicationTopImg}>
            <Image
              className=""
              src={ApplicationItems.src}
              alt={ApplicationItems.alt}
              width={1040}
              height={1040}
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
        </div>
      </div>
    </>
  );
}
