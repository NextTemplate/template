// STEP3
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Application/Application.module.scss";

export default function Step_03() {
  const ApplicationItems = {
    src: "/media/step_02.png",
    alt: "インハウスデザイナー",
    title: "インハウスデザイナー",
    text: "岡山県倉敷市にある不動産会社にてweb制作、DTPデザイン、web広告運用、シェアサロンビジネスのプロダクトマネージャーとして勤務中です。",
    subTitle_00: "web制作",
    subText_00:
      "総合不動産会社の各部門のHPやwebサイトの作成など担当しています。独自のシステムが数多く存在し、苦労しています。",
    subTitle_01: "DTPデザイン",
    subText_01:
      "地方ではまだまだチラシの影響力が強く、チラシ、名刺、ロゴ、看板、デジタルサイネージなどDTP業務全般を担当しています。",
    subTitle_02: "web広告運用",
    subText_02:
      "チラシと合わせてweb広告運用を行っています。キャンペーンの企画、クリエイティブの作成、効果測定などのPDCAサイクルを考慮して運用を行なっています。",
    subTitle_03: "シェアサロンビジネス",
    subText_03:
      "新規自社プロダクトとしてシェアサロンを運営中です。プロダクトに関わる、広報、採用、カスタマーサポート、マネジメントなども担当しています。1店舗目を半年で黒字化させ、2022年11月2店舗目をOpenしました。現在3店舗目のOpenに向け準備中。",
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
