// STEP2
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Application/Application.module.scss";

export default function Step_02() {
  const ApplicationItems = {
    src: "/media/step_01.png",
    alt: "web制作会社",
    title: "web制作会社",
    text: "渋谷にあるスタートアップのweb制作会社へ転職。主に不動産業界のwebサイト制作に特化した部門にて、フロントエンドエンジニアとして、UIのデザイン、バナー制作を担当。約6ヶ月間SESとしてメガベンチャーにてOracleサーバーサイドエンジニアも経験。",
    subTitle_00: "UIデザイン",
    subText_00:
      "Figmaを使用し、デザインカンプを作成していました。この頃英語表記だった為苦労しました。",
    subTitle_01: "バナー制作",
    subText_01:
      "Photoshop, Illustratorを使用し、バナー制作を行いました。高級感や清潔感のあるデザインを求められ四苦八苦しました。",
    subTitle_02: "SEO",
    subText_02:
      "基本的なテキストデータの最適化から、サテライトサイトを作成して本体への導線を増やし流入を得るやり方を学びました。",
    subTitle_03: "サーバーサイドエンジニア",
    subText_03:
      "バックエンド側の処理にも見識を深めたいとSESにて六本木のメガベンチャー企業へ常駐しました。",
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
              alt={ApplicationItems.alt}
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
        </div>

        <div className={styles.applicationUnderArea}>
          <div className={styles.applicationUnderLeft}>
            <h3 className={styles.applicationUnderTitle}>
              {ApplicationItems.subTitle_02}
            </h3>
            <p className={styles.applicationUnderText}>
              {ApplicationItems.subText_02}
            </p>
          </div>
          <div className={styles.applicationUnderRight}>
            <h3 className={styles.applicationUnderTitle}>
              {ApplicationItems.subTitle_03}
            </h3>
            <p className={styles.applicationUnderText}>
              {ApplicationItems.subText_03}
            </p>
          </div>
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
    </>
  );
}
