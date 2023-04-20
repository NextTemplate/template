import React, { FC } from "react";
import Image from "next/image";
import styles from "./Slick.module.scss";

type Props = {
  onClick: () => void;
};

const NextArrow: FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <Image
        src={"/media/nextArrow.png"}
        alt={"Next Arrow"}
        height={40}
        width={40}
      />
    </div>
  );
};

export default NextArrow;
