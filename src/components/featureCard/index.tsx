import React from "react";
import Image from "next/image";
import styles from "./featureCard.module.scss";

const card = {
  leftImage: "/media/likeButton_00.png",
  rightImage: "/media/sample_000.png",
  rightTitle: "お客様の心揺さぶるタイトルを",
  rightText: "\
  ここにテキストが入ります。割と長めの文字を入れることで、このcardの内容を伝えます。\
  ここにテキストが入ります。割と長めの文字を入れることで、このcardの内容を伝えます。\
  ここにテキストが入ります。割と長めの文字を入れることで、このcardの内容を伝えます。\
  ここにテキストが入ります。割と長めの文字を入れることで、このcardの内容を伝えます。",
}

export default function FeatureCard() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.cardLeft}>
            <Image
              src={card.leftImage}
              alt={""}
              height={1000}
              width={1000}
            />
          </div>

          <div className={styles.cardRight}>
            <ul>
              <li className={styles.cardRightImage}>
              <Image
                src={card.rightImage}
                alt={""}
                height={1000}
                width={1000}
              />
              </li>
              <li className={styles.cardRightTitle}>
                <h2>{card.rightTitle}</h2>
              </li>
              <li className={styles.cardRightText}>
                <p>{card.rightText}</p>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
