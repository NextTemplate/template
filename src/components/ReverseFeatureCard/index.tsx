import React from "react";
import Image from "next/image";
import styles from "./ReverseFeatureCard.module.scss";

const card = {
  leftImage: "/media/sample_000.png",
  leftTitle: "お客様の心揺さぶるタイトルを",
  leftText: "\
  ここにテキストが入ります。割と長めの文字を入れることで、このcardの内容を伝えます。\
  ここにテキストが入ります。割と長めの文字を入れることで、このcardの内容を伝えます。\
  ここにテキストが入ります。割と長めの文字を入れることで、このcardの内容を伝えます。\
  ここにテキストが入ります。割と長めの文字を入れることで、このcardの内容を伝えます。",
  rightImage: "/media/likeButton_00.png",
}

export default function ReverseFeatureCard() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardInner}>

          <div className={styles.cardLeft}>
            <li className={styles.cardLeftImage}>
              <Image
                src={card.leftImage}
                alt={""}
                height={1000}
                width={1000}
              />
            </li>
            <li className={styles.cardLeftTitle}>
              <h2>{card.leftTitle}</h2>
            </li>
            <li className={styles.cardLeftText}>
              <p>{card.leftText}</p>
            </li>
          </div>

          <div className={styles.cardRight}>
            <ul>
              <Image
                src={card.rightImage}
                alt={""}
                height={1000}
                width={1000}
              />
            </ul>
          </div>
          
        </div>
      </div>
    </>
  );
}
