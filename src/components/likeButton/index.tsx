import React, { useState } from "react";
import Image from "next/image";
import styles from "./likeButton.module.scss";

const LikeButton = () => {
  return (
    <section>
      <ul className={styles.likeButton}>
        <li>
          <button className={styles.likeBInner}>
            <Image
              src={"/media/likeButton_00.png"}
              height={100}
              width={100}
              alt={""}  
            />
          </button>
        </li>
        <li>
          <button className={styles.likeStar}>
            <Image
              src={"/media/likeButton_01.png"}
              height={100}
              width={100}
              alt={""}  
            />
          </button>
        </li>
      </ul>
    </section>
  );
}

export default LikeButton;
