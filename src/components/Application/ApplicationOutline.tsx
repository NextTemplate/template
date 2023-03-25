// 申込概要
import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import styles from "../../styles/Application/Application.module.scss";

export default function ApplicationOutline() {
  const ApplicationOutlineItems_00 = {
    title: "総合制作会社",
    src: "/media/step_00.png",
    alt: "STEP1の画像です",
    text: "3年",
  };
  const ApplicationOutlineItems_01 = {
    title: "web制作会社",
    src: "/media/step_01.png",
    alt: "STEP2の画像です",
    text: "1年",
  };
  const ApplicationOutlineItems_02 = {
    title: "インハウスデザイナー",
    src: "/media/step_02.png",
    alt: "STEP3の画像です",
    text: "3年",
  };
  const ArrowImagePC = {
    src: "/media/step_03.png",
    alt: "矢印",
  };
  const ArrowImageSP = {
    src: "/media/step_04.png",
    alt: "矢印",
  };
  const ApplicationOutlineText = {
    text: "美容師を退職後、アシスタントとして総合制作会社に入職。もっとweb制作学びたいと考え、渋谷にあるweb制作会社へ転職。妻の家族の療養のため岡山に帰省後、不動産会社にてインハウスデザイナーとして勤務しています。",
  };
  return (
    <>
      <div className={styles.flexE}>
        <div className={styles.flow}>
          <h4>{ApplicationOutlineItems_00.title}</h4>
          <Image
            className=""
            src={ApplicationOutlineItems_00.src}
            alt={ApplicationOutlineItems_00.alt}
            width={500}
            height={500}
            objectFit="contain"
          />
          <p>{ApplicationOutlineItems_00.text}</p>
        </div>
        <div className={styles.allowImagePC}>
          <Image
            src={ArrowImagePC.src}
            alt={ArrowImagePC.alt}
            width={100}
            height={100}
            objectFit="contain"
          />
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

        <div className={styles.flow}>
          <h4>{ApplicationOutlineItems_01.title}</h4>
          <Image
            className=""
            src={ApplicationOutlineItems_01.src}
            alt={ApplicationOutlineItems_01.alt}
            width={500}
            height={500}
            objectFit="contain"
          />
          <p>{ApplicationOutlineItems_01.text}</p>
        </div>
        <div className={styles.allowImagePC}>
          <Image
            className=""
            src={ArrowImagePC.src}
            alt={ArrowImagePC.alt}
            width={100}
            height={100}
            objectFit="contain"
          />
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
        <div className={styles.flow}>
          <h4>{ApplicationOutlineItems_02.title}</h4>
          <Image
            className=""
            src={ApplicationOutlineItems_02.src}
            alt={ApplicationOutlineItems_02.alt}
            width={500}
            height={500}
            objectFit="contain"
          />
          <p>{ApplicationOutlineItems_02.text}</p>
        </div>
      </div>
      <div className={styles.applicationText}>
        <p>{ApplicationOutlineText.text}</p>
      </div>
    </>
  );
}
